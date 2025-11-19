/**
 * Professional Portfolio JavaScript
 * Author: Merin Xavy
 * Purpose: Handles Splash Screen animation, Smooth Scrolling, and Data Visualization.
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Merin Xavy's portfolio script is initialized with Cool-Tone Palette.");

    // ========================================================
    // 1. SPLASH SCREEN LOGIC
    // ========================================================
    const splashScreen = document.getElementById('splash-screen');
    const splashCta = document.getElementById('splash-cta-btn');
    const body = document.body;

    if (splashScreen && splashCta) {
        body.classList.add('no-scroll');

        splashCta.addEventListener('click', (e) => {
            e.preventDefault();
            // Start the fade-out transition (CSS handles the 0.8s timing)
            splashScreen.style.opacity = '0';
            
            setTimeout(() => {
                // Hide the screen completely and unlock scrolling
                splashScreen.style.visibility = 'hidden';
                splashScreen.style.display = 'none';
                body.classList.remove('no-scroll');
            }, 800);
        });
    }

    // ========================================================
    // 2. SMOOTH SCROLLING FOR NAVIGATION
    // ========================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================================
    // 3. SKILLS RADAR CHART (Chart.js)
    // ========================================================
    // Colors updated to: Accent Green (#16A085) and Text Blue (#2C3E50)
    const canvas = document.getElementById('radarChart');

    if (canvas && typeof Chart !== 'undefined') {
        const ctx = canvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'Financial Modeling', 
                    'Data Analysis', 
                    'Risk Management', 
                    'Compliance', 
                    'Excel/BI Tools', 
                    'Strategic Planning'
                ],
                datasets: [{
                    label: 'Proficiency Level',
                    data: [85, 90, 80, 75, 95, 80], // Illustrative values (0-100)
                    // Deep Forest Green: #16A085 (RGB: 22, 160, 133)
                    backgroundColor: 'rgba(22, 160, 133, 0.2)',    /* Green with opacity */
                    borderColor: 'rgba(22, 160, 133, 1)',          /* Solid Green border */
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(22, 160, 133, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(22, 160, 133, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#2C3E50', // Matches --text (Slate Blue)
                        titleFont: { family: 'Playfair Display' },
                        bodyFont: { family: 'Inter' }
                    }
                },
                scales: {
                    r: { 
                        beginAtZero: true, 
                        min: 0, 
                        max: 100, 
                        ticks: { display: false },
                        grid: { 
                            // Matches a lighter shade of --text (Slate Blue)
                            color: 'rgba(44, 62, 80, 0.1)' 
                        },
                        pointLabels: { 
                            font: { size: 12, weight: '600', family: 'Inter' }, 
                            color: '#2C3E50' // Matches --text (Slate Blue)
                        }
                    }
                }
            }
        });
    }
});
