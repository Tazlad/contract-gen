document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contractForm');
    const messageDiv = document.getElementById('message');

    // Set today's date as default for all date fields
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('OfferDate').value = today;
    document.getElementById('ContractDate').value = today;
    document.getElementById('StartDate').value = today;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Clear previous messages
        messageDiv.className = 'message';
        messageDiv.textContent = '';
        messageDiv.style.display = 'none';

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            // Show loading message
            messageDiv.className = 'message';
            messageDiv.textContent = 'Generating contract...';
            messageDiv.style.display = 'block';

            const response = await fetch('/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to generate contract');
            }

            // Get the blob from response
            const blob = await response.blob();

            // Create a download link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Contract_${data.EmployeeName.replace(/\s+/g, '_')}_${Date.now()}.docx`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            // Show success message
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Contract generated successfully! Check your downloads.';

        } catch (error) {
            console.error('Error:', error);
            messageDiv.className = 'message error';
            messageDiv.textContent = 'Error generating contract. Please try again.';
        }
    });

    // Format BSB input
    const bsbInput = document.getElementById('EmployeeBSB');
    bsbInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3) {
            value = value.slice(0, 3) + '-' + value.slice(3, 6);
        }
        e.target.value = value;
    });
});
