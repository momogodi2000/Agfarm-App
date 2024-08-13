from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

User = get_user_model()

class AuthTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpass', role='admin', phone_number='1234567890')

        # Update URLs to match the names defined in urls.py
        self.register_url = reverse('signup')
        self.login_url = reverse('signin')
        self.logout_url = reverse('logout')
        self.forgot_password_url = reverse('forgot_password')
        self.contact_message_url = reverse('contact')

    def test_register_user(self):
        data = {
            'username': 'newuser',
            'password': 'newpass',
            'email': 'newuser@example.com',
            'role': 'financial_institution',
            'phone_number': '0987654321'
        }
        response = self.client.post(self.register_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_login_user(self):
        data = {
            'username': 'testuser',
            'password': 'testpass',
        }
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logout_user(self):
        self.client.login(username='testuser', password='testpass')
        response = self.client.post(self.logout_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_forgot_password_send_otp(self):
        data = {
            'phone_number': '1234567890',
        }
        response = self.client.post(self.forgot_password_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'OTP sent to your phone number.')

    def test_forgot_password_reset(self):
        self.user.otp = '123456'
        self.user.save()
        data = {
            'phone_number': '1234567890',
            'otp': '123456',
            'new_password': 'newtestpass'
        }
        response = self.client.put(self.forgot_password_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Password has been reset successfully.')

    def test_contact_message(self):
        data = {
            'name': 'Test User',
            'email': 'testuser@example.com',
            'message': 'This is a test message.'
        }
        response = self.client.post(self.contact_message_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Contact message sent successfully.')
