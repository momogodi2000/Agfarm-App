from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import get_user_model, authenticate, login, logout
from .serializers import UserSerializer, RegisterSerializer
import random
from django.contrib.auth.hashers import check_password
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from django.contrib.sessions.models import Session

User = get_user_model()


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_data = request.data
        try:
            serializer = RegisterSerializer(data=user_data)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "User registered successfully!"}, status.HTTP_201_CREATED)
            return Response({"message": "Error " + str(serializer.errors)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"message": str(e)}, status.HTTP_500_INTERNAL_SERVER_ERROR)


class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        try:
            user = User.objects.get(username=username, email=email)
            if not check_password(password, user.password):
                return Response({"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

            login(request, user)
            return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "Invalid Credentials"}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        logout(request)

        # Terminate the session
        if hasattr(request, 'session'):
            request.session.flush()  # Delete the session data
            session_key = request.session.session_key
            if session_key:
                Session.objects.filter(session_key=session_key).delete()

        # Return the response indicating the user is logged out
        return Response(status=status.HTTP_204_NO_CONTENT)


class ForgotPasswordView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'User with this email does not exist.'}, status=status.HTTP_400_BAD_REQUEST)

        otp = random.randint(100000, 999999)
        user.otp = otp
        user.save()

        # Send OTP to user's email
        subject = 'Password Reset OTP'
        message = f'Your OTP for password reset is: {otp}'
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [email]
        send_mail(subject, message, from_email, recipient_list)

        return Response({'message': 'OTP sent to your email address.'})

    def put(self, request, *args, **kwargs):
        email = request.data.get('email')
        otp = request.data.get('otp')
        new_password = request.data.get('new_password')

        try:
            user = User.objects.get(email=email, otp=otp)
        except User.DoesNotExist:
            return Response({'error': 'Invalid OTP or email.'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.otp = None
        user.save()

        return Response({'message': 'Password has been reset successfully.'})
    

class ContactMessageView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Your message has been sent successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
