document.addEventListener('DOMContentLoaded', () => {
    // Add scroll reveal effects for action buttons
    const actionButtons = document.querySelectorAll('.btn');
    actionButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            btn.style.transition = 'all 0.5s ease-out';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Handle WhatsApp redirection with message pre-fill
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            const defaultMessage = encodeURIComponent("Hello Quantrex Global Trade, I am interested in your products. Please share more details.");
            // whatsappBtn.href = `https://wa.me/YOUR_PHONE_NUMBER?text=${defaultMessage}`;
        });
    }
});
