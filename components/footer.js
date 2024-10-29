document.addEventListener('DOMContentLoaded', function() {
    const footer = `
        <div class="inner">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-left">
                        <a href="/">
                            <svg width="215" height="50" viewBox="0 11.012 54.882 16.987" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <style>@import url(https://fonts.googleapis.com/css2?family=Mitr%3Aital%2Cwght%400%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700&amp;display=swap);</style>
                                </defs>
                                <text style="fill: rgb(255, 255, 255); font-family: Mitr; font-size: 21px; font-weight: 500; white-space: pre;" x="0.088" y="26.578">ai16z</text>
                            </svg>
                        </a>
                    </div>
                    <div class="footer-right">
                        <div class="contract-addresses">
                            <p><strong>ai16z:</strong> HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC</p>
                            <p><strong>degenai:</strong> Gu3LDkn7Vx3bmCzLafYNKcDxv2mH7YN44NJZFXnypump</p>
                        </div>
                        <ul class="social-networks">
                            <li>
                                <a href="https://x.com/pmairca" class="fab fa-twitter" target="_blank" rel="noopener noreferrer"></a>
                            </li>
                            <li>
                                <a href="https://discord.gg/xe7HtWru" target="_blank" class="fa-brands fa-discord" rel="noopener noreferrer"></a>
                            </li>
                            <li>
                                <a href="https://github.com/ai16z" class="fab fa-github" target="_blank" rel="noopener noreferrer"></a>
                            </li>
                            <li>
                                <a href="https://www.daos.fun/HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC" class="fas fa-project-diagram" target="_blank" rel="noopener noreferrer"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('#footer').innerHTML = footer;
});
