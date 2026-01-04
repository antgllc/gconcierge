// Pomelli Campaign Clone - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Creative card click handlers
    const creativeCards = document.querySelectorAll('.creative-card');
    creativeCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            console.log(`Creative card ${index + 1} clicked`);
            // Add selection state
            card.classList.toggle('selected');
        });
    });

    // Add Creative button handler
    const addCreativeBtn = document.querySelector('.add-creative-btn');
    if (addCreativeBtn) {
        addCreativeBtn.addEventListener('click', () => {
            console.log('Add Creative button clicked');
            alert('Add Creative feature - Coming soon!');
        });
    }

    // Campaigns navigation handler
    const navCampaigns = document.querySelector('.nav-campaigns');
    if (navCampaigns) {
        navCampaigns.addEventListener('click', () => {
            console.log('Navigating back to Campaigns');
            // In a real app, this would navigate to the campaigns list
        });
    }

    // Menu button handler
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menu opened');
            // In a real app, this would open a side menu
        });
    }

    // More options button handler
    const moreBtn = document.querySelector('.more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            console.log('More options clicked');
            // In a real app, this would show a dropdown menu
        });
    }

    // Info card click handlers (sidebar)
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('highlight')) {
                console.log('Animate feature clicked');
                alert('Animate feature - Generate animations from your campaigns!');
            }
        });
    });

    // Add hover effects for cards
    creativeCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});

// Add selected state styles dynamically
const style = document.createElement('style');
style.textContent = `
    .creative-card.selected {
        outline: 3px solid var(--accent-lime);
        outline-offset: 2px;
    }

    .info-card.highlight {
        cursor: pointer;
        transition: transform 0.2s;
    }

    .info-card.highlight:hover {
        transform: scale(1.02);
    }
`;
document.head.appendChild(style);
