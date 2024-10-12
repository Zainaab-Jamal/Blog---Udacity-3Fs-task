document.addEventListener('DOMContentLoaded', () => {
    const adviceText = document.getElementById('advice-text');
    const getAdviceButton = document.getElementById('get-advice');
    const adviceCountElement = document.getElementById('advice-count').querySelector('strong');
    let adviceCount = 0;

    async function getAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            adviceText.textContent = data.slip.advice;
            adviceCount++;
            adviceCountElement.textContent = adviceCount;
        } catch (error) {
            // console.error('Error fetching advice:', error);
            adviceText.textContent = 'Failed to fetch advice. Please try again later.';
        }
    }

    getAdviceButton.addEventListener('click', getAdvice);
});