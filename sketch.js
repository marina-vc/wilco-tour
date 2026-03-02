let titles = "I MUST BE HIGH. BOX FULL OF LETTERS. SOMEDAY SOON. FORGET THE FLOWERS. PICK UP THE CHANGE. YOU NEVER KNOW. MISUNDERSTOOD. FAR FAR AWAY. MONDAY. OUTTASITE (OUTTA MIND). SUNKEN TREASURE. SHOT IN THE ARM. VIA CHICAGO. HOW TO FIGHT LONELINESS. JESUS, ETC. ASHES OF AMERICAN FLAGS. HEAVY METAL DRUMMER. I’M THE MAN WHO LOVES YOU. POT KETTLE BLACK. POOR PLACES. RESERVATIONS. I AM TRYING TO BREAK YOUR HEART. KAMERA. RADIO CURE. WAR ON WAR. JESUS, ETC. ASHES OF AMERICAN FLAGS. HEAVY METAL DRUMMER. I’M THE MAN WHO LOVES YOU. POT KETTLE BLACK. POOR PLACES. RESERVATIONS. HUMMINGBIRD. HANDSHAKE DRUGS. WISHFUL THINKING. COMPANY IN MY BACK. I’M A WHEEL. HELL IS CHROME. SPIDERS (KIDSMOKE). MUZZLE OF BEES. THEOLOGIANS. LESS THAN YOU THINK. THE LATE GREATS. EITHER WAY. YOU ARE MY FACE. IMPOSSIBLE GERMANY. SKY BLUE SKY. SIDE WITH THE SEEDS. SHAKE IT OFF. PLEASE BE PATIENT WITH ME. HATE IT HERE. WHAT LIGHT. ON AND ON AND ON. WILCO (THE SONG). DEEPER DOWN. ONE WING. BULL BLACK NOVA. YOU AND I. I’LL FIGHT. ONE SUNDAY MORNING. ART OF ALMOST. I MIGHT. SUNLOATHE. STANDING O. BLACK MOON. BORN ALONE. OPEN MIND. CAPITOL CITY. STANDING O. WHOLE LOVE. RISING RED LUNG. IF I EVER WAS A CHILD. CRY ALL DAY. COMMON SENSE. LOCOMOTIVE. LOVE IS EVERYWHERE (BEWARE). HOLD ME ANYWAY. ANNIHILATION. HUMANKIND. BIRD WITHOUT A TAIL / BASE OF MY SKULL.";

let t = 0;
let minDist = 20;
let lastX, lastY;

let size = 16;

// Carrego fonts
// function preload() {}


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('sketch-cnt');

  textAlign(CENTER, TOP);
  fill(255);
  noStroke();
  lastX = mouseX;
  lastY = mouseY;
  
  fill(255);
  noStroke();
  blendMode(DIFFERENCE);
  

  // Set screen reader accessible description
  describe('A canvas where the user plays with Wilco songs');
}

// Escriure totes les cançons de Wilco que tocaran a la gira
function mouseDragged() {
  smooth();

  size += 0.1;
  textSize(size);

  if (dist(mouseX, mouseY, lastX, lastY) < minDist) return;

  text(titles[t], mouseX, mouseY);
  t = (t + 1) % titles.length;

  lastX = mouseX; lastY = mouseY;
  
}

function mouseReleased() {
  size = 16;
}


// Reiniciar
function keyPressed() {
  if (key === 'c') clear(); // neteja
}
