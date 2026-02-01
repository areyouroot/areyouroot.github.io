document.addEventListener('DOMContentLoaded', function() {
    const feedContainer = document.getElementById('linkedin-feed-container');

    if (!feedContainer) return;

    // Data strategy: 4 "Real" posts based on resume facts, 2 "Visionary" posts for Gahranox
    const posts = [
        // --- REAL POST 1: Hubstream / SSDLC (Current Role) ---
        {
            date: '2d • Edited',
            content: `🚀 Proud to share a major milestone at <strong>Hubstream</strong>! We've successfully architected and implemented a comprehensive <strong>SSDLC (Secure Software Development Life Cycle)</strong>.<br><br>
            By automating SAST, DAST, and SCA scans into our weekly tests and nightly build cycles, we've shifted security left, ensuring vulnerabilities are caught early. Security isn't just a checkpoint; it's a culture.<br><br>
            #Hubstream #AppSec #DevSecOps #SSDLC #CyberSecurity`,
            likes: 124,
            comments: 18
        },
        // --- REAL POST 2: Innovation Award (Achievement) ---
        {
            date: '2w',
            content: `Honored to receive the <strong>Innovation Award</strong> at our Internal Hackathon! 🏆<br><br>
            We built a solution leveraging <strong>Azure's GPT models</strong> to automate repetitive CSV data creation workloads—long before the current AI boom took off. It’s amazing to see how AI can solve tangible efficiency problems in enterprise workflows.<br><br>
            #AI #AzureOpenAI #Hackathon #Innovation #Automation`,
            likes: 215,
            comments: 32
        },
        // --- VISIONARY POST 1: Gahranox (Future Founder) ---
        {
            date: '1mo',
            content: `The future is not something we enter. It is something we build.<br><br>
            I am thrilled to announce the upcoming launch of <strong>Gahranox Carvel Labs Technologies</strong>. Our mission is to build generative solutions that give back more than they take. We are preparing to tackle humanity's greatest challenges, atom by atom, line of code by line of code.<br><br>
            Stay tuned. 🌍✨<br>
            #GahranoxCarvel #Founder #TechForGood #FutureTech #SustainableGenAI`,
            likes: 89,
            comments: 14
        },
        // --- REAL POST 3: .NET Migration (Engineering) ---
        {
            date: '1mo',
            content: `Legacy modernization is no small feat, but it's essential. 💻<br><br>
            Just wrapped up a massive migration project moving our core systems from legacy .NET Framework to <strong>.NET 9</strong>, alongside upgrading our TypeScript codebase to v5.9. The performance improvements and developer experience upgrades are night and day.<br><br>
            #DotNet #Engineering #Migration #FullStack #TypeScript`,
            likes: 156,
            comments: 21
        },
        // --- VISIONARY POST 2: Zero Trust (Security Philosophy) ---
        {
            date: '2mo',
            content: `Trust Null. Verify Always. 🛡️<br><br>
            Leading the <strong>"Trust Null"</strong> initiative has redefined how we approach internal security. Zero Trust is more than network segmentation; it's about assuming breach and verifying every request. It’s the only way to build resilient systems in today's threat landscape.<br><br>
            #ZeroTrust #CyberDefense #SecurityEngineering #Leadership`,
            likes: 342,
            comments: 45
        },
        // --- REAL POST 4: Blockchain Project (Academic) ---
        {
            date: '3mo',
            content: `Reflecting on my research into decentralized storage. 🔗<br><br>
            Developing a <strong>Blockchain-Based Decentralized Storage System</strong> using Smart Contracts and IPFS taught me the power of immutable data structures. Ensuring data integrity without a central authority is the future of secure digital assets.<br><br>
            #Blockchain #IPFS #SmartContracts #Decentralization #Research`,
            likes: 98,
            comments: 12
        }
    ];

    // Render Posts function
    function renderPosts() {
        let html = '';
        posts.forEach((post, index) => {
            // Add AOS delay for staggered animation
            const delay = index * 100;

            html += `
            <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="linkedin-card h-100">
                    <div class="linkedin-header">
                        <img src="img/WhatsApp Image 2025-08-31 at 13.00.12_28232640.jpg" alt="Abdul Faheem" class="linkedin-avatar">
                        <div class="linkedin-info">
                            <h5>Abdul Faheem A</h5>
                            <span>Security Engineer | Founder</span>
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
                            <a href="https://linkedin.com/in/abdulfaheem" target="_blank">View <i class="fas fa-external-link-alt"></i></a>
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
    }, 500);
});
