document.addEventListener('DOMContentLoaded', function() {
    const feedContainer = document.getElementById('linkedin-feed-container');

    if (!feedContainer) return;

    // Mock Data based on Resume to simulate a live feed without CORS issues
    const posts = [
        {
            date: '2d • Edited',
            content: `🚀 Thrilled to share that we've successfully implemented a comprehensive <strong>SSDLC (Secure Software Development Life Cycle)</strong> at Hubstream! <br><br>
            By automating SAST, DAST, and SCA scans into our nightly build cycles, we've significantly reduced vulnerability detection time. Security isn't just a gate anymore; it's embedded in every line of code we write. <br><br>
            #DevSecOps #CyberSecurity #SSDLC #Automation #Hubstream`,
            likes: 423,
            comments: 28
        },
        {
            date: '1w',
            content: `Leading the <strong>"Trust Null"</strong> initiative has been one of the most challenging and rewarding experiences of my career. <br><br>
            Moving towards a Zero Trust architecture isn't just about new tools—it's a mindset shift. "Never trust, always verify" is now at the core of our security policy. Proud of the team for embracing this change! 🛡️<br><br>
            #ZeroTrust #SecurityEngineering #Leadership #CyberDefense`,
            likes: 856,
            comments: 45
        },
        {
            date: '2w',
            content: `Big win at the Internal Hackathon! 🏆 <br><br>
            Won the Innovation Award for automating repeated workloads using <strong>Azure's GPT models</strong>. Leveraging AI to solve real-world efficiency problems is what it's all about. Can't wait to see this go into production.<br><br>
            #AI #Hackathon #Innovation #AzureOpenAI #Productivity`,
            likes: 534,
            comments: 32
        },
        {
            date: '3w',
            content: `Legacy no more! 💻✨ <br><br>
            Successfully spearheaded the migration of our core systems from .NET Framework to <strong>.NET 9</strong> and upgraded our frontend to TypeScript v5.9. The performance gains are incredible, and the developer experience is night and day.<br><br>
            Modernization is key to staying ahead in tech. #DotNet9 #TypeScript #FullStack #TechMigration #Engineering`,
            likes: 612,
            comments: 39
        }
    ];

    // Render Posts function
    function renderPosts() {
        let html = '';
        posts.forEach((post, index) => {
            // Add AOS delay for staggered animation
            const delay = index * 100;

            html += `
            <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="linkedin-card h-100">
                    <div class="linkedin-header">
                        <img src="img/WhatsApp Image 2025-08-31 at 13.00.12_28232640.jpg" alt="Abdul Faheem" class="linkedin-avatar">
                        <div class="linkedin-info">
                            <h5>Abdul Faheem A</h5>
                            <span>Security Engineer | Founder @ Gahranox Carvel</span>
                            <span class="d-block text-muted small" style="font-size: 0.75rem;">${post.date}</span>
                        </div>
                    </div>
                    <div class="linkedin-body">
                        <p>${post.content}</p>
                    </div>
                    <div class="linkedin-footer">
                        <div class="linkedin-stats">
                            <i class="fas fa-thumbs-up text-primary me-1"></i> ${post.likes}
                            <span class="mx-2">•</span>
                            ${post.comments} comments
                        </div>
                        <div class="linkedin-actions">
                            <a href="https://linkedin.com/in/abdulfaheem" target="_blank">View Post <i class="fas fa-external-link-alt ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        feedContainer.innerHTML = html;
    }

    // Simulate network delay for realistic effect
    setTimeout(() => {
        renderPosts();
    }, 800);
});
