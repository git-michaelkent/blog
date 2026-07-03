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
            <details>
                <summary>GPLv3 / CC BY-NC 4.0</summary>
                The website's software is released under the GNU GPLv3. 
                Any company logos/icons are owned by their respective corporations.
                Unless otherwise stated, all text, images, audio, video, logos, and other 
                creative content on this site are licensed under CC BY-NC 4.0
            </details>
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