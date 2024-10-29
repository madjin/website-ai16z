document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
        <div class="container">
            <a href="/" class="logo">   
                <svg width="215" height="50" viewBox="0 11.012 54.882 16.987" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>@import url(https://fonts.googleapis.com/css2?family=Mitr%3Aital%2Cwght%400%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700&amp;display=swap);</style>
                    </defs>
                    <text style="font-family: Mitr; font-size: 21px; font-weight: 500; white-space: pre;" x="0.088" y="26.578">ai16z</text>
                </svg>
            </a>
            
            <div class="dropdown">
                <button class="dropdown-button">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="dropdown-content">
                    <a href="https://x.com/pmairca" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://discord.gg/xe7HtWru" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-discord"></i> Discord
                    </a>
                    <a href="https://github.com/ai16z" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.daos.fun/HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-project-diagram"></i> DAO
                    </a>
                </div>
            </div>
        </div>
    `;
    document.querySelector('#header').innerHTML = navbar;
});
