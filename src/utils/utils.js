export function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp) {
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .otp{
            font-size: 24px;
            font-weight: bold;
            color: #007BFF;
            }
    </style>
</head>
<body>
    <div class="container">
        <h1>OTP Verification</h1>
        <p class="otp">Your OTP is: ${otp}</p>
        <p>Please use this OTP to verify your account.</p>
    </div>
</body>
</html>`;
}