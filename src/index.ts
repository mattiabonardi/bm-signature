
const signature = `
▄▄▄▄    ███▄ ▄███▓ 
▓█████▄ ▓██▒▀█▀ ██▒
▒██▒ ▄██▓██    ▓██░      powered by Mattia Bonardi
▒██░█▀  ▒██    ▒██       email: mattiabonardi99@gmail.com
░▓█  ▀█▓▒██▒   ░██▒      github: https://github.com/mattiabonardi 
░▒▓███▀▒░ ▒░   ░  ░      linkedin: https://linkedin.com/in/mattia-bonardi-099b02235/
▒░▒   ░ ░  ░      ░      instagram: https://instagram.com/mattiaabonardi/
 ░    ░ ░      ░         
 ░             ░         
      ░            
`;

/**
 * Print signature to console.log
 */
export function printToConsole() {
  console.log(signature);
}

/**
 * Print signature to HTML DOM
 * @returns
 */
export function printToDOM(e: HTMLPreElement) {
  e.innerHTML = signature;
}

/**
 * Print signature to HTML DOM as comment
 * @returns
 */
export function printToDOMasComment(e: HTMLElement) {
  e.innerHTML = "<!-- " + signature + "-->";
}
