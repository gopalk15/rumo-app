export const getSuccessMessage = (email: string ): string => {
    const messages = [
        `🎉 Welcome aboard, ${email}! Your account is ready to rock!`,
        `✨ Boom! ${email} just joined the party! 🎊`,
        `🚀 Account created successfully for ${email}! To infinity and beyond!`,
        `🎯 Bulls-eye! ${email} is now part of our awesome community!`,
        `🌟 Ta-da! ${email} is officially in the club! Welcome!`,
        `🔥 Hot off the press! ${email} just got their golden ticket!`,
        `🎪 Step right up! ${email} has joined the greatest show on earth!`,
        `🏆 Victory! ${email} successfully claimed their spot!`,
        `🎨 Masterpiece! ${email} just painted their way into our world!`,
        `🌈 Rainbow vibes! ${email} has brightened up our day!`
    ];

    return messages[Math.floor(Math.random() * messages.length)];
};

// Error messages based on Firebase error codes
export const getErrorMessage = (errorCode: string): string => {
    const errorMessages: Record<string, string> = {
        'auth/email-already-in-use': '🤔 Oops! This email is already living its best life with us! Try another one! 📧',
        'auth/invalid-email': '🧐 Hmm, that email looks a bit funky! Double-check those letters and symbols! ✍️',
        'auth/operation-not-allowed': '🚫 Hold up! This operation is taking a coffee break. Try again later! ☕',
        'auth/weak-password': '💪 Your password needs to hit the gym! Make it stronger with 6+ characters! 🏋️‍♀️',
        'auth/user-disabled': '😴 This account is taking a nap! Contact support to wake it up! 💤',
        'auth/user-not-found': '🔍 Playing hide and seek? We can\'t find that user anywhere! 👻',
        'auth/wrong-password': '🔐 Whoopsie! That password is playing hard to get! Try again! 🗝️',
        'auth/too-many-requests': '🐌 Slow down there, speed racer! Too many attempts. Take a breather! 🧘‍♀️',
        'auth/network-request-failed': '📡 Houston, we have a connection problem! Check your internet! 🌐',
        'auth/timeout': '⏰ Time\'s up! The request took too long. Let\'s try that again! ⚡',
        'auth/cancelled-popup-request': '🚪 The popup got stage fright and closed! Give it another shot! 🎭',
        'auth/popup-blocked': '🚧 Your browser is being a popup party pooper! Please allow popups! 🎉',
        'auth/internal-error': '🤖 Our robots are having a moment! Please try again later! 🔧',
        'auth/invalid-api-key': '🔑 Our secret key went on vacation! Contact support! 🏖️',
        'auth/app-deleted': '👻 The app vanished into thin air! Something went wrong! 💨'
    };

    // Default message for unknown errors
    const defaultMessage = '😅 Oops! Something unexpected happened! Our digital gremlins are on it! 🧚‍♀️';

    return errorMessages[errorCode] || defaultMessage;
};
