from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model

User = get_user_model()

class AuthenticationTests(APITestCase):
    def setUp(self):
        self.user_data = {
            'username': 'testuser',
            'password': 'testpassword123',
            'email': 'testuser@example.com'
        }
        self.user = User.objects.create_user(**self.user_data)
        self.signin_url = reverse('signin')  # Adjust according to your URL configuration
        self.signup_url = reverse('signup')  # Adjust according to your URL configuration
        self.forgot_password_url = reverse('forgot-password')  # Adjust according to your URL configuration
        self.logout_url = reverse('logout')  # Adjust according to your URL configuration

    def test_signup(self):
        response = self.client.post(self.signup_url, {
            'username': 'newuser',
            'password': 'newpassword123',
            'email': 'newuser@example.com'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('id', response.data)

    def test_signin(self):
        response = self.client.post(self.signin_url, {
            'username': self.user_data['username'],
            'password': self.user_data['password']
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)  # Adjust based on your response

    def test_forgot_password(self):
        response = self.client.post(self.forgot_password_url, {
            'email': self.user_data['email']
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['detail'], 'Password reset email sent.')  # Adjust based on your response

    def test_logout(self):
        # First sign in to get a valid session
        self.client.post(self.signin_url, {
            'username': self.user_data['username'],
            'password': self.user_data['password']
        })
        response = self.client.post(self.logout_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Attempt to access a protected endpoint to verify logout
        response = self.client.get(reverse('some-protected-endpoint'))  # Replace with an actual protected endpoint
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
