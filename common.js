const headerHTML = `
    <header style="font-family: sans-serif;">
        <p>Essays on</p>
        personal progress, people, and programs
    </header>
`;

const footerHTML = `
    <footer>
        <div class="footer">
            <span><a href="mailto:ft2fxeeq@4wrd.cc"><img src="/assets/email.png" alt=""></a></span>
            <span>|</span>
            <span>Licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPLv3</a></span>
            <span>|</span>
            <details>
                <summary>Attributions</summary>
                    <a href="https://www.flaticon.com/free-icons/email" title="email icon">Email icon created by Freepik - Flaticon</a>
            </details>
        </div>
    </footer>
`;

function injectHeaderFooter() {
    const mainElement = document.querySelector('body') || document.body;
    mainElement.insertAdjacentHTML('beforebegin', headerHTML);
    
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', injectHeaderFooter);