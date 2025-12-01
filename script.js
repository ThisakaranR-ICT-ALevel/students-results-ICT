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
  "RSudarvanan": { name: "R.Sudarvanan", marks: 0 },
  "AKMHadhi": { name: "A.K.M Hadhi", marks: 0 },
  "SSamrin": { name: "S.Samrin", marks: 0 },
  "IKamsika": { name: "I.kamsika", marks: 0 },
  "AJathusan": { name: "A.Jathusan", marks: 0 }
};

const grade13Marks = {
  "RThisakaran": { name: "R. Thisakaran", marks: 88 },
  "Kamal": { name: "Kamal", marks: 82 },
  "Nimal": { name: "Nimal", marks: 70 },
  "Siva": { name: "Siva", marks: 50 },
  "Ravi": { name: "Ravi", marks: 60 }
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
    <p><strong>Rank:</strong> ${rank} / 26</p>
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
