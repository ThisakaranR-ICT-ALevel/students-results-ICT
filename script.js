// ICT PORTAL RESULT SYSTEM
// TOTAL STUDENTS = 26 per grade

const grade12Marks = {
  "KThushanthiny": { name: "K.Thushanthiny", marks: 78.5 },
  "SVarman": { name: "S.Varman", marks: 78 },
  "TNikasini": { name: "T.Nikasini", marks: 76.5 },
  "TThikalarashi": { name: "T.Thikalarashi", marks: 71 },
  "MThamilvily": { name: "M.Thamilvily", marks: 70.5 },
  "VPuvarshika": { name: "V.puvarshika", marks: 67 },
  "ANivetha": { name: "A. Nivetha", marks: 63 },
  "TChanghjeena": { name: "T.Changhjeena", marks: 61 },
  "GSasthikumar": { name: "G.Sasthikumar", marks: 53 },
  "PNithusan": { name: "P.Nithusan", marks: 48 },
  "TDilojan": { name: "T.Dilojan", marks: 42.5 },
  "BAmuthakanan": { name: "B.Amuthakanan", marks: 40 },
  "SOviya": { name: "S.Oviya", marks: 38 },
  "SDisanth": { name: "S. Disanth", marks: 34 },
  "VSanthosh": { name: "V.Santhosh", marks: 34 },
  "ISuvaththiran": { name: "I.Suvaththiran", marks: 34 },
  "PPiranavan": { name: "P.Piranavan", marks: 32.5 },
  "SSajanthan": { name: "S.sajanthan", marks: 32.5 },
  "MKapisan": { name: "M.kapisan", marks: 30 },
  "SKirushan": { name: "S.Kirushan", marks: 29.5 },
  "PYalavan": { name: "P.yalavan", marks: 25.5 },
  "TDanojan": { name: "T.Danojan", marks: 25.5 },
  "RSharan": { name: "R.sharan", marks: 24 },
  "RJokithan": { name: "R.Jokithan", marks: 21.5 },
  "SVithushan": { name: "S.Vithushan", marks: 17 },
  "NKuperan": { name: "N.Kuperan", marks: 16.5 },
  // "RSudarvanan": { name: "R.Sudarvanan", marks: 0 },
  // "AKMHadhi": { name: "A.K.M Hadhi", marks: 0 },
  // "SSamrin": { name: "S.Samrin", marks: 0 },
  // "IKamsika": { name: "I.kamsika", marks: 0 },
  // "AJathusan": { name: "A.Jathusan", marks: 0 }
};

const grade13Marks = {
  "KAkchchaya": { name: "K. Akchchaya", marks: 90.5 },
  "RHarmish": { name: "R.Harmish", marks: 84.5 },
  "MHFathima Hasna": { name: "M. H. Fathima Hasna", marks: 83 },
  "ALathusha": { name: "A.Lathusha", marks: 82 },
  "AAyasha": { name: "A.Ayasha", marks: 75 },
  "VNithyakshatha": { name: "V.Nithyakshatha", marks: 72.5 },
  "MLokithan": { name: "M.Lokithan", marks: 70.5 },
  "AIMAnsif": { name: "A.I.M. Ansif", marks: 68.5 },
  "V.Mithurshika": { name: "V.Mithurshika", marks: 68.5 },
  "YAkeela": { name: "Y. Akeela", marks: 64.5 },
  "Gkabilraj": { name: "G.kabilraj", marks: 62 },
  "RMonisha": { name: "R.Monisha", marks: 57 },
  "KNiluja": { name: "K.Niluja", marks: 56 },
  "SThuvakaran": { name: "S.Thuvakaran", marks: 52.5 },
  "Skathirsan": { name: "S.kathirsan", marks: 44.5 },
  "Gkogulraj": { name: "G.kogulraj", marks: 40.5 },
  "MRMuddhassir": { name: "M.R.Muddhassir", marks: 35.5 },
  "SSudarnilavan": { name: "S.Sudarnilavan", marks: 35 },
  "Sjanurshan": { name: "S.janurshan", marks: 34.5 },
  "MAAhamath": { name: "M.A.Ahamath", marks: 27 },
  "AFAfrose": { name: "A. F.AFROSE", marks: 21 },
  // "SThadshayini": { name: "S.Thadshayini", marks: 0 },
  // "AThanusiya": { name: "A.Thanusiya", marks: 0},
  // "SNitharshiny": { name: "S. Nitharshiny", marks: 0 },
  // "YJatheeswar": { name: "Y.Jatheeswar", marks: 0 },
  // "SMakilnilavan": { name: "S.Makilnilavan", marks: 0 },
  // "KJhon": { name: "K.Jhon", marks: 0 },
  // "Musrif": { name: "Musrif", marks: 0 },
  // "IImadh": { name: "I.Imadh", marks: 0 },
  // "TRahna": { name: "T. Rahna", marks: 0 }

};

// FORMAT INPUT NAME
function formatName(input) {
  if (!input) return "";
  return input.replace(/[.\s]/g, '').trim();
}

// Z-SCORE CALCULATION
function calculateZScore(marks, gradeMarks) {
  const marksArray = Object.values(gradeMarks).map(s => s.marks);
  const mean = marksArray.reduce((a,b) => a+b,0) / marksArray.length;
  const sd = Math.sqrt(marksArray.map(x => Math.pow(x - mean,2)).reduce((a,b)=>a+b,0)/marksArray.length);
  return ((marks - mean)/sd).toFixed(3);
}

// GET RESULT MESSAGE
function getMessage(marks) {
  if (marks >= 85) return "Excellent : A+";
  if (marks >= 80) return "Great : A";
  if (marks >= 75) return "Great : A-";
  if (marks >= 70) return "Good : B+";
  if (marks >= 65) return "Good : B";
  if (marks >= 60) return "Average : B-";
  if (marks >= 55) return "Average : C+";
  if (marks >= 50) return "Average: C";
  if (marks >= 45) return "Poor: C-";
  if (marks >= 35) return "Poor : S";
  if (marks < 35) return "Need to Improve";
  return "Poor";
}

// SHOW COLORFUL POPUP
function showPopup(title, htmlContent) {
  const popup = document.createElement('div');
  popup.className = 'popup-box';

  const inner = document.createElement('div');
  inner.className = 'popup-content animated-popup';

  const h2 = document.createElement('h2');
  h2.textContent = title;
  inner.appendChild(h2);

  const contentDiv = document.createElement('div');
  contentDiv.className = 'popup-inner';
  contentDiv.innerHTML = htmlContent + '<p style="margin-top:15px; color:#164753;">Keep learning and stay motivated! 💪</p>';
  inner.appendChild(contentDiv);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = 'Close';
  closeBtn.onclick = function(){ document.body.removeChild(popup); };
  inner.appendChild(closeBtn);

  popup.appendChild(inner);
  document.body.appendChild(popup);
}

// MAIN SEARCH FUNCTION
function searchStudent(grade="12") {
  const inputElem = document.getElementById('studentInput');
  if (!inputElem) return;

  const input = inputElem.value;
  const formatted = formatName(input);

  const gradeMarks = (grade === "12") ? grade12Marks : grade13Marks;

  if (!gradeMarks.hasOwnProperty(formatted)) {
    showPopup('Not Found', '<p style="color:red;">Student name not found.<br>Please enter valid format (e.g., RThisakaran).</p>');
    return;
  }

  const data = gradeMarks[formatted];
  const marks = data.marks;
  const zscore = calculateZScore(marks, gradeMarks);
  const message = getMessage(marks);

  const arr = Object.values(gradeMarks).slice().sort((a,b)=>b.marks - a.marks);
  const rank = arr.findIndex(s=>s.marks===marks)+1;

  const html = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Marks:</strong> ${marks}</p>
    <p><strong>Rank:</strong> ${rank}</p>
    <p><strong>Z-Score:</strong> ${zscore}</p>
    <p><strong>Result:</strong> ${message}</p>
  `;

  showPopup('Student Result', html);
}

// ATTACH BUTTON EVENTS
window.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('searchBtn');
  if (btn) {
    const grade = window.location.href.includes("grade12") ? "12" : "13";
    btn.addEventListener('click', function(){ searchStudent(grade); });
  }
});
