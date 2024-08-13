from django.urls import path
from .views import RegisterView, LoginView, LogoutView, ForgotPasswordView
from .views import ContactMessageView


urlpatterns = [
    path('signup/', RegisterView.as_view(), name='signup'),
    path('signin/', LoginView.as_view(), name='signin'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot_password'),
    path('contact/', ContactMessageView.as_view(), name='contact'),

]
