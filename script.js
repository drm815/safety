const rooms = [
  {
    id: "living-room",
    name: "거실",
    description:
      "가족이 함께 시간을 보내는 공간이에요. 전선, 가구 모서리, 미끄러운 바닥 등을 살펴보며 어린이나 어르신이 다칠 만한 요소가 없는지 확인해 보세요.",
    hazards: [
      {
        title: "전선이 엉켜 있는 멀티탭",
        risk: "high",
        cues: [
          "콘센트 주변에 먼지나 물기가 묻어 있나요?",
          "여러 전자기기를 한 멀티탭에 동시에 연결해 두었나요?"
        ],
        improvement:
          "사용하지 않는 전자기기는 빼고, 멀티탭은 과부하 표시가 있는 제품으로 교체한 뒤 정리용 타이로 전선을 묶어 주세요."
      },
      {
        title: "러그·바닥 미끄러짐",
        risk: "medium",
        cues: [
          "러그 밑면에 미끄럼 방지 패드가 있나요?",
          "바닥에 물기가 남아 있지는 않나요?"
        ],
        improvement:
          "러그에는 미끄럼 방지 패드를 추가하고, 물걸레질 후에는 건조 시간을 충분히 확보합니다."
      },
      {
        title: "낮은 높이의 가구 모서리",
        risk: "low",
        cues: [
          "아이의 머리 높이에 딱딱한 모서리가 있나요?",
          "몸을 부딪힐 만한 좁은 동선이 있나요?"
        ],
        improvement:
          "모서리 보호대를 부착하고, 동선이 겹치지 않도록 가구 위치를 재배치합니다."
      }
    ]
  },
  {
    id: "kitchen",
    name: "주방",
    description:
      "불과 전기가 함께 쓰이는 공간이므로 화재 예방과 위생이 중요해요. 조리 중 주변 정리 상태와 환기 방법을 떠올려 보세요.",
    hazards: [
      {
        title: "가스레인지 주변 가연성 물건",
        risk: "high",
        cues: [
          "행주나 키친타월을 가스레인지 옆에 올려 두었나요?",
          "불꽃이 생기는 동안 잠시 자리를 비우나요?"
        ],
        improvement:
          "가연성 물건은 멀리 치우고, 조리 중에는 가능한 범위 내에서 자리를 지킵니다. 타이머를 활용해 화기 사용 시간을 관리해요."
      },
      {
        title: "조리기구 손잡이 방향",
        risk: "medium",
        cues: [
          "냄비나 팬의 손잡이가 통로를 향해 있나요?",
          "어린이나 반려동물이 손잡이를 잡을 수 있는 위치인가요?"
        ],
        improvement:
          "손잡이는 벽 쪽으로 돌리고, 인덕션·가스레인지 사용 후에는 남은 열이 없는지 확인합니다."
      },
      {
        title: "칼과 조리도구 보관",
        risk: "medium",
        cues: [
          "칼이 싱크대 위에 그대로 놓여 있나요?",
          "사용 후 바로 닦아 건조대에 세워 두나요?"
        ],
        improvement:
          "자석 거치대나 칼집을 사용해 칼날이 노출되지 않도록 하고, 세척 후 물기를 충분히 제거합니다."
      }
    ]
  },
  {
    id: "bathroom",
    name: "욕실",
    description:
      "바닥이 젖어 미끄러지기 쉬운 곳이니, 전기 제품 사용과 환기 상태도 함께 체크해 보세요.",
    hazards: [
      {
        title: "전기 제품의 물기 노출",
        risk: "high",
        cues: [
          "헤어드라이어, 전동칫솔 등을 콘센트에 꽂은 채로 두나요?",
          "제품이 물 튀는 위치에 놓여 있나요?"
        ],
        improvement:
          "전기 제품은 사용 후 반드시 플러그를 빼고, 방수 커버가 있는 콘센트를 사용합니다."
      },
      {
        title: "바닥 배수 상태",
        risk: "medium",
        cues: [
          "배수구에 머리카락이 쌓여 있나요?",
          "바닥 물기가 오래 남아 있나요?"
        ],
        improvement:
          "샤워 후 물기를 밀대로 제거하고, 배수구는 주기적으로 청소해 냄새와 곰팡이를 예방합니다."
      },
      {
        title: "미끄러운 욕조·타일",
        risk: "high",
        cues: [
          "욕조나 타일 표면이 매끈한가요?",
          "미끄럼 방지 스티커나 매트가 없나요?"
        ],
        improvement:
          "미끄럼 방지 매트를 설치하고, 물때를 줄이기 위해 정기적으로 세정제를 사용합니다."
      }
    ]
  },
  {
    id: "bedroom",
    name: "침실",
    description:
      "편안한 휴식 공간이지만, 수면 중 위험을 줄이기 위한 조치가 필요해요. 난방기나 전자기기 주변을 점검해 보세요.",
    hazards: [
      {
        title: "난방기 과열",
        risk: "medium",
        cues: [
          "난방기 주변에 옷가지나 종이가 쌓여 있나요?",
          "오랫동안 전원을 켠 채로 두나요?"
        ],
        improvement:
          "난방기 주변 1m 이내에는 가연성 물질을 두지 말고, 주기적으로 전원 상태를 확인합니다."
      },
      {
        title: "휴대폰 충전기 과열",
        risk: "low",
        cues: [
          "충전기를 침대 속에 넣어 두고 사용하나요?",
          "밤새 충전하는 기기가 많나요?"
        ],
        improvement:
          "충전 기기는 통풍이 잘 되는 곳에 두고, 필요할 때만 충전해 배터리 과열을 줄입니다."
      },
      {
        title: "비상 탈출 경로 확보",
        risk: "medium",
        cues: [
          "침실 창문이나 문 앞을 짐으로 막아 두었나요?",
          "야간에도 불빛 없이 이동할 수 있는가요?"
        ],
        improvement:
          "창문과 문 주변을 정리하고, 야간 비상등을 설치해 어두운 상황에서도 이동할 수 있도록 합니다."
      }
    ]
  },
  {
    id: "balcony",
    name: "베란다",
    description:
      "실외에 가깝기 때문에 추락, 화재, 환기 문제를 동시에 고려해야 해요. 화분, 빨래 건조대 등을 점검해 보세요.",
    hazards: [
      {
        title: "난간 높이와 틈",
        risk: "high",
        cues: [
          "난간 사이 간격이 넓어 어린이가 빠져나갈 수 있나요?",
          "발판이 될 만한 물건이 놓여 있나요?"
        ],
        improvement:
          "난간 틈을 막는 안전망을 설치하고, 발판이 될 물건은 치웁니다."
      },
      {
        title: "건조대 주변 정리 상태",
        risk: "medium",
        cues: [
          "빨래 건조대 아래 물이 고여 있나요?",
          "젖은 빨래가 통로를 막고 있나요?"
        ],
        improvement:
          "바닥 물기를 제거하고, 이동 동선을 확보해 미끄러짐과 충돌 사고를 예방합니다."
      },
      {
        title: "화분 관리",
        risk: "low",
        cues: [
          "화분이 난간 가까이에 있나요?",
          "토양이 흘러내려 바닥을 오염시키나요?"
        ],
        improvement:
          "무게중심이 낮은 화분으로 교체하거나 고정시키고, 배수구를 자주 청소합니다."
      }
    ]
  }
];

const roomSelector = document.getElementById("roomSelector");
const hazardGrid = document.getElementById("hazardGrid");
const roomTitle = document.getElementById("roomTitle");
const roomDescription = document.getElementById("roomDescription");
const planList = document.getElementById("planList");
const clearPlanButton = document.getElementById("clearPlan");
const downloadPlanButton = document.getElementById("downloadPlan");
const startTourButton = document.getElementById("startTour");
const introSection = document.getElementById("intro");

let planItems = [];

function createRoomButton(room, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = room.name;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", index === 0);
  button.dataset.roomId = room.id;
  button.addEventListener("click", () => selectRoom(room.id));
  return button;
}

function renderRoomButtons() {
  rooms.forEach((room, index) => {
    const button = createRoomButton(room, index);
    roomSelector.appendChild(button);
  });
}

function selectRoom(id, options = {}) {
  const { scroll = true } = options;
  const selectedRoom = rooms.find((room) => room.id === id);
  if (!selectedRoom) return;

  Array.from(roomSelector.children).forEach((button) => {
    button.setAttribute("aria-selected", button.dataset.roomId === id);
  });

  roomTitle.textContent = selectedRoom.name;
  roomDescription.textContent = selectedRoom.description;
  renderHazards(selectedRoom);
  if (scroll) {
    introSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderHazards(room) {
  hazardGrid.innerHTML = "";

  room.hazards.forEach((hazard) => {
    const card = document.createElement("article");
    card.className = "hazard-card";

    const riskBadge = document.createElement("span");
    riskBadge.className = "hazard-card__risk";
    riskBadge.dataset.level = hazard.risk;
    riskBadge.textContent = `위험도 ${riskLabel(hazard.risk)}`;
    card.appendChild(riskBadge);

    const title = document.createElement("h3");
    title.textContent = hazard.title;
    card.appendChild(title);

    const cueList = document.createElement("ul");
    hazard.cues.forEach((cue) => {
      const listItem = document.createElement("li");
      listItem.textContent = cue;
      cueList.appendChild(listItem);
    });
    card.appendChild(cueList);

    const improvement = document.createElement("p");
    improvement.className = "hazard-card__improvement";
    improvement.textContent = hazard.improvement;
    card.appendChild(improvement);

    const actionBar = document.createElement("div");
    actionBar.className = "hazard-card__actions";

    const addButton = document.createElement("button");
    addButton.className = "primary";
    addButton.type = "button";
    addButton.textContent = "안전 계획에 추가";
    addButton.addEventListener("click", () => addToPlan(room, hazard));

    const reflectButton = document.createElement("button");
    reflectButton.className = "secondary";
    reflectButton.type = "button";
    reflectButton.textContent = "더 살펴볼 질문";
    reflectButton.addEventListener("click", () => showReflection(hazard));

    actionBar.append(addButton, reflectButton);
    card.appendChild(actionBar);

    hazardGrid.appendChild(card);
  });
}

function riskLabel(level) {
  switch (level) {
    case "high":
      return "높음";
    case "medium":
      return "보통";
    default:
      return "낮음";
  }
}

function addToPlan(room, hazard) {
  const planId = `${room.id}-${hazard.title}`;

  if (planItems.find((item) => item.id === planId)) {
    pulsePlanItem(planId);
    return;
  }

  planItems.push({
    id: planId,
    room: room.name,
    title: hazard.title,
    improvement: hazard.improvement
  });

  renderPlan();
  planList.parentElement.scrollIntoView({ behavior: "smooth", block: "start" });
}

function pulsePlanItem(id) {
  const element = document.querySelector(`[data-plan-id="${id}"]`);
  if (!element) return;
  element.classList.add("pulse");
  setTimeout(() => element.classList.remove("pulse"), 600);
}

function renderPlan() {
  planList.innerHTML = "";

  if (planItems.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "아직 추가된 계획이 없어요. 위험요소 카드를 선택해 보세요!";
    empty.className = "plan__empty";
    planList.appendChild(empty);
    return;
  }

  planItems.forEach((item) => {
    const planItem = document.createElement("article");
    planItem.className = "plan-item";
    planItem.dataset.planId = item.id;

    const header = document.createElement("div");
    header.className = "plan-item__header";

    const title = document.createElement("p");
    title.className = "plan-item__title";
    title.textContent = item.title;

    const room = document.createElement("span");
    room.className = "plan-item__room";
    room.textContent = item.room;

    const description = document.createElement("p");
    description.className = "plan-item__description";
    description.textContent = item.improvement;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "plan__button plan__button--secondary";
    removeButton.textContent = "제거";
    removeButton.addEventListener("click", () => removeFromPlan(item.id));

    header.append(room, title);
    planItem.append(header, description, removeButton);
    planList.appendChild(planItem);
  });
}

function removeFromPlan(id) {
  planItems = planItems.filter((item) => item.id !== id);
  renderPlan();
}

function showReflection(hazard) {
  const dialog = document.createElement("div");
  dialog.className = "reflection";
  dialog.innerHTML = `
    <div class="reflection__content" role="dialog" aria-modal="true">
      <h3>${hazard.title} 더 살펴보기</h3>
      <ul>
        ${hazard.cues
          .map((cue) => `<li>${cue}</li>`)
          .join("")}
      </ul>
      <button type="button" class="plan__button" id="reflectionClose">닫기</button>
    </div>
  `;

  document.body.appendChild(dialog);
  const closeButton = document.getElementById("reflectionClose");
  closeButton.focus();
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      cleanup();
    }
  };
  const cleanup = () => {
    dialog.remove();
    document.removeEventListener("keydown", handleKeyDown);
  };
  closeButton.addEventListener("click", cleanup);
  document.addEventListener("keydown", handleKeyDown);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      cleanup();
    }
  });
}

function clearPlan() {
  planItems = [];
  renderPlan();
}

function downloadPlan() {
  if (planItems.length === 0) {
    alert("먼저 위험요소를 선택해 계획을 채워 주세요!");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const margin = 16;
  let y = margin;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("우리 집 안전 계획", margin, y);
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  planItems.forEach((item, index) => {
    doc.setFont(undefined, "bold");
    doc.text(`${index + 1}. ${item.title} (${item.room})`, margin, y);
    y += 7;

    const lines = doc.splitTextToSize(item.improvement, 180);
    doc.setFont(undefined, "normal");
    doc.text(lines, margin, y);
    y += lines.length * 6 + 4;

    if (y > 270 && index !== planItems.length - 1) {
      doc.addPage();
      y = margin;
    }
  });

  doc.save("home-safety-plan.pdf");
}

function handleStartTour() {
  const firstRoom = rooms[0];
  selectRoom(firstRoom.id);
  window.scrollTo({ top: introSection.offsetTop - 20, behavior: "smooth" });
}

function initialize() {
  renderRoomButtons();
  renderPlan();
  selectRoom(rooms[0].id, { scroll: false });

  clearPlanButton.addEventListener("click", clearPlan);
  downloadPlanButton.addEventListener("click", downloadPlan);
  startTourButton.addEventListener("click", handleStartTour);
}

initialize();
