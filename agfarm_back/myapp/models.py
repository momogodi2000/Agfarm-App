from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ("admin", "Admin"),
        ("financial_institution", "Financial Institution"),
        ("farmer", "Farmer"),
        ('buyer', 'Buyer'),
        ("government_agency", "Government Agency"),
        ("logistics_provider", "Logistics Provider"),
    ]
    role = models.CharField(max_length=30, choices=ROLE_CHOICES)
    phone_number = models.CharField(max_length=12, unique=True, null=True, blank=True)
    otp = models.CharField(max_length=6, null=True, blank=True)


class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
