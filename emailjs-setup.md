# Setting Up EmailJS for Your Portfolio Contact Form

This guide will help you set up EmailJS to send emails from your contact form without a backend.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for a portfolio site

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Give your service a name (e.g., "portfolio-contact")
6. Note down the **Service ID** for later use

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email of the person contacting you
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The message content
4. Here's a simple template example:

```
Subject: New Contact Form Message: {{subject}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

5. Save your template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Set Up Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Save the file
4. Restart your development server if it's running

## Testing Your Form

1. Fill out your contact form with test data
2. Submit the form
3. Check your email to see if you received the test message
4. Check the console for any errors if the email wasn't sent

## Security Note

Your Public Key is safe to include in client-side code. However, never include private keys or sensitive information in your frontend code.

## Troubleshooting

If you encounter issues:

1. Check the browser console for errors
2. Verify your EmailJS credentials are correct
3. Make sure your email service is properly connected
4. Check your spam folder for test emails
