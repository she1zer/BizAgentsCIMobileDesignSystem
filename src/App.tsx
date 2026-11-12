import { useMemo, useState, type ReactNode } from "react";

type Screen = "home" | "validate" | "team" | "sales" | "more";
type IconName =
  | "home"
  | "check"
  | "users"
  | "chart"
  | "grid"
  | "bell"
  | "wifi"
  | "chat"
  | "arrow"
  | "receipt"
  | "wallet"
  | "clock"
  | "chevron"
  | "spark"
  | "plus"
  | "box"
  | "file"
  | "settings"
  | "phone"
  | "moon"
  | "sun"
  | "search"
  | "close";

const iconPaths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  check: (
    <>
      <path d="M20 11a8 8 0 1 1-3-6" />
      <path d="m9 11 2 2 6-7" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" />
    </>
  ),
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-9 8 9 9 0 0 1-4-1l-5 2 2-5a9 9 0 1 1 16-4Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v19l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 6h16v14H3zM3 8V5a2 2 0 0 1 2-2h12" />
      <path d="M15 13h6v4h-6a2 2 0 0 1 0-4Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  spark: (
    <>
      <path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2Z" />
      <path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  box: (
    <>
      <path d="m3 7 9-4 9 4-9 4-9-4Z" />
      <path d="M3 7v10l9 4 9-4V7M12 11v10" />
    </>
  ),
  file: (
    <>
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v5h5M9 13h6M9 17h6" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A7 7 0 0 0 15 6l-.3-2.6h-4L10.4 6a7 7 0 0 0-1.6 1L6.5 6.1l-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.6 1l.3 2.6h4l.3-2.6a7 7 0 0 0 1.6-1l2.3 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z" />
    </>
  ),
  phone: (
    <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-1-1 3a15 15 0 0 1-10-10l3-1-1-5Z" />
  ),
  moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="m15 15 6 6" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
  icon,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  icon?: IconName;
}) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </button>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "success" | "warning" | "danger" | "neutral";
}) {
  return (
    <span className={`badge badge-${tone}`}>
      <span className="badge-dot" />
      {children}
    </span>
  );
}

const agents = [
  {
    name: "Aya",
    role: "Service client",
    icon: "chat" as IconName,
    color: "turquoise",
    status: "En ligne",
    detail: "12 conversations traitées",
  },
  {
    name: "Koffi",
    role: "Commercial",
    icon: "chart" as IconName,
    color: "orange",
    status: "En action",
    detail: "3 relances envoyées",
  },
  {
    name: "Nana",
    role: "Comptable",
    icon: "receipt" as IconName,
    color: "green",
    status: "À vérifier",
    detail: "2 paiements rapprochés",
  },
];

function AgentAvatar({
  agent,
  small = false,
}: {
  agent: (typeof agents)[number];
  small?: boolean;
}) {
  return (
    <span className={`agent-avatar ${agent.color} ${small ? "small" : ""}`}>
      <Icon name={agent.icon} />
    </span>
  );
}

function Header({
  dark,
  setDark,
  offline,
  setOffline,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
  offline: boolean;
  setOffline: (v: boolean) => void;
}) {
  return (
    <header className="app-header">
      <button
        className="brand"
        onClick={() => setOffline(!offline)}
        aria-label="Changer l’état réseau"
      >
        <span className="brand-mark">
          <Icon name="spark" size={18} />
        </span>
        <span>
          BizAgents <b>CI</b>
        </span>
      </button>
      <div className="header-actions">
        <button
          className={`icon-btn ${offline ? "is-alert" : ""}`}
          onClick={() => setOffline(!offline)}
          aria-label="État du réseau"
        >
          <Icon name="wifi" />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <Icon name="bell" />
          <span className="notification-dot" />
        </button>
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Changer le thème">
          <Icon name={dark ? "sun" : "moon"} />
        </button>
      </div>
    </header>
  );
}

function Home({
  onOpenAction,
  onNavigate,
  offline,
}: {
  onOpenAction: () => void;
  onNavigate: (s: Screen) => void;
  offline: boolean;
}) {
  return (
    <div className="screen-content">
      {offline && (
        <div className="offline-banner">
          <span>
            <Icon name="wifi" size={18} />
            <b>Hors ligne</b>
          </span>
          <small>Données enregistrées à 10:42</small>
        </div>
      )}
      <section className="hero">
        <div>
          <p className="eyebrow">Mardi 18 juin</p>
          <h1>Bonjour Awa,</h1>
          <p>Votre équipe a bien travaillé ce matin.</p>
        </div>
        <div className="avatar-person" aria-label="Avatar d’Awa">
          AW
        </div>
      </section>

      <section className="money-card">
        <div className="money-top">
          <span>Résumé du jour</span>
          <Badge tone="success">Synchronisé</Badge>
        </div>
        <strong>
          186 500 <small>FCFA</small>
        </strong>
        <span className="money-label">encaissés aujourd’hui</span>
        <div className="money-grid">
          <div>
            <span>Ventes</span>
            <b>245 000</b>
          </div>
          <div>
            <span>À encaisser</span>
            <b>58 500</b>
          </div>
        </div>
      </section>

      <button className="attention-card" onClick={onOpenAction}>
        <span className="attention-icon">
          <Icon name="check" />
        </span>
        <span>
          <b>4 actions à valider</b>
          <small>2 sont prioritaires</small>
        </span>
        <Icon name="chevron" />
      </button>

      <div className="section-title">
        <div>
          <p className="eyebrow">Mon équipe</p>
          <h2>Les agents au travail</h2>
        </div>
        <button onClick={() => onNavigate("team")}>Tout voir</button>
      </div>
      <div className="agent-list">
        {agents.map((agent) => (
          <button className="agent-card" key={agent.name} onClick={() => onNavigate("team")}>
            <AgentAvatar agent={agent} />
            <span className="agent-info">
              <span>
                <b>{agent.name}</b>
                <small>{agent.role}</small>
              </span>
              <Badge tone={agent.status === "À vérifier" ? "warning" : "success"}>
                {agent.status}
              </Badge>
            </span>
            <span className="agent-detail">{agent.detail}</span>
          </button>
        ))}
      </div>

      <div className="section-title activity-title">
        <div>
          <p className="eyebrow">Activité</p>
          <h2>Dernières nouvelles</h2>
        </div>
        <button>Voir le fil</button>
      </div>
      <div className="timeline">
        <div className="timeline-row">
          <span className="timeline-icon turquoise">
            <Icon name="chat" />
          </span>
          <span>
            <b>Aya a répondu à Fatou K.</b>
            <small>« Oui, le pagne est disponible… »</small>
          </span>
          <time>10:36</time>
        </div>
        <div className="timeline-row">
          <span className="timeline-icon green">
            <Icon name="wallet" />
          </span>
          <span>
            <b>Paiement reçu</b>
            <small>Commande #1042 · Orange Money</small>
          </span>
          <time>09:52</time>
        </div>
        <div className="timeline-row">
          <span className="timeline-icon orange">
            <Icon name="arrow" />
          </span>
          <span>
            <b>Koffi a relancé un devis</b>
            <small>Maison Kadi · 75 000 FCFA</small>
          </span>
          <time>09:18</time>
        </div>
      </div>
    </div>
  );
}

function Validate({ onOpenAction }: { onOpenAction: () => void }) {
  return (
    <div className="screen-content">
      <section className="page-heading">
        <p className="eyebrow">Boîte de décision</p>
        <h1>
          À valider <span>4</span>
        </h1>
        <p>Votre équipe attend votre accord.</p>
      </section>
      <div className="filter-row">
        <button className="filter active">
          Toutes <b>4</b>
        </button>
        <button className="filter">Messages</button>
        <button className="filter">Devis</button>
      </div>
      <article className="action-card priority">
        <div className="action-meta">
          <div>
            <AgentAvatar agent={agents[1]} small />
            <span>
              <b>Koffi</b>
              <small>Commercial · il y a 8 min</small>
            </span>
          </div>
          <Badge tone="warning">Prioritaire</Badge>
        </div>
        <h3>Remise demandée par Maison Kadi</h3>
        <p>Le client souhaite une réduction sur sa commande de 10 lots de pagnes.</p>
        <div className="amount-line">
          <span>Total proposé</span>
          <b>215 000 FCFA</b>
        </div>
        <div className="three-actions">
          <Button variant="ghost">Refuser</Button>
          <Button variant="secondary">Corriger</Button>
          <Button onClick={onOpenAction}>Valider</Button>
        </div>
      </article>
      <article className="action-card">
        <div className="action-meta">
          <div>
            <AgentAvatar agent={agents[0]} small />
            <span>
              <b>Aya</b>
              <small>Service client · il y a 21 min</small>
            </span>
          </div>
          <Badge>Message</Badge>
        </div>
        <h3>Réponse à Aminata B.</h3>
        <blockquote>« Bonjour Aminata, votre commande sera prête demain à 14 h… »</blockquote>
        <div className="three-actions">
          <Button variant="ghost">Refuser</Button>
          <Button variant="secondary">Corriger</Button>
          <Button>Valider</Button>
        </div>
      </article>
      <article className="action-card muted-card">
        <div className="action-meta">
          <div>
            <AgentAvatar agent={agents[2]} small />
            <span>
              <b>Nana</b>
              <small>Comptable · il y a 1 h</small>
            </span>
          </div>
          <Badge tone="neutral">En attente</Badge>
        </div>
        <h3>Dépense à classer · 18 500 FCFA</h3>
        <p>Cette décision sera synchronisée dès le retour du réseau.</p>
      </article>
    </div>
  );
}

function Team() {
  const [selected, setSelected] = useState(0);
  const agent = agents[selected];
  return (
    <div className="screen-content">
      <section className="page-heading">
        <p className="eyebrow">Mon équipe IA</p>
        <h1>Toujours à vos côtés</h1>
        <p>Suivez leur travail et donnez vos consignes.</p>
      </section>
      <div className="team-switch">
        {agents.map((a, i) => (
          <button
            key={a.name}
            className={selected === i ? "active" : ""}
            onClick={() => setSelected(i)}
          >
            <AgentAvatar agent={a} />
            <b>{a.name}</b>
            <small>{a.role.split(" ")[0]}</small>
          </button>
        ))}
      </div>
      <section className="profile-card">
        <div className="profile-top">
          <AgentAvatar agent={agent} />
          <div>
            <span className="profile-name">{agent.name}</span>
            <p>{agent.role}</p>
            <Badge tone="success">Actif maintenant</Badge>
          </div>
        </div>
        <div className="autonomy">
          <span>
            <Icon name="spark" />
            <span>
              <b>Semi-autonome</b>
              <small>Agit seul jusqu’à 50 000 FCFA</small>
            </span>
          </span>
          <button>Modifier</button>
        </div>
        <div className="stats">
          <div>
            <b>{selected === 0 ? "94" : selected === 1 ? "18" : "31"}</b>
            <small>actions ce mois</small>
          </div>
          <div>
            <b>{selected === 0 ? "2 min" : selected === 1 ? "62%" : "98%"}</b>
            <small>
              {selected === 0
                ? "temps de réponse"
                : selected === 1
                  ? "devis acceptés"
                  : "bien classé"}
            </small>
          </div>
        </div>
      </section>
      <div className="section-title">
        <div>
          <p className="eyebrow">Consignes actives</p>
          <h2>Ce que {agent.name} retient</h2>
        </div>
      </div>
      <div className="instruction">
        <span>1</span>
        <p>Répondre avec un ton chaleureux et appeler les clientes par leur prénom.</p>
      </div>
      <div className="instruction">
        <span>2</span>
        <p>Ne jamais promettre une livraison sans vérifier le stock.</p>
      </div>
      <Button icon="plus">Donner une consigne</Button>
      <button className="voice-action">
        <span className="mic">●</span>
        <span>
          <b>Parler à {agent.name}</b>
          <small>Maintenez pour enregistrer</small>
        </span>
      </button>
    </div>
  );
}

const salesItems = [
  {
    icon: "box" as IconName,
    title: "Catalogue",
    detail: "38 produits · 4 stocks bas",
    tone: "turquoise",
  },
  {
    icon: "users" as IconName,
    title: "Clients",
    detail: "124 clients · 385 000 FCFA dus",
    tone: "orange",
  },
  { icon: "file" as IconName, title: "Devis", detail: "6 ouverts · 2 à relancer", tone: "pink" },
  {
    icon: "receipt" as IconName,
    title: "Factures",
    detail: "3 en retard · 215 000 FCFA",
    tone: "green",
  },
  {
    icon: "wallet" as IconName,
    title: "Journal",
    detail: "Recettes et dépenses du mois",
    tone: "burgundy",
  },
];

function Sales() {
  return (
    <div className="screen-content">
      <section className="page-heading">
        <p className="eyebrow">Ventes & finances</p>
        <h1>Votre activité</h1>
        <p>Tout ce qu’il faut, sans complication.</p>
      </section>
      <section className="sales-summary">
        <div>
          <span>Chiffre d’affaires · Juin</span>
          <strong>
            1 245 000 <small>FCFA</small>
          </strong>
          <p>
            <b>+12 %</b> par rapport à mai
          </p>
        </div>
        <span className="mini-chart">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </section>
      <div className="quick-actions">
        <button>
          <Icon name="plus" />
          <span>Créer un devis</span>
        </button>
        <button>
          <Icon name="wallet" />
          <span>Ajouter un paiement</span>
        </button>
      </div>
      <div className="module-list">
        {salesItems.map((item) => (
          <button key={item.title}>
            <span className={`module-icon ${item.tone}`}>
              <Icon name={item.icon} />
            </span>
            <span>
              <b>{item.title}</b>
              <small>{item.detail}</small>
            </span>
            <Icon name="chevron" />
          </button>
        ))}
      </div>
    </div>
  );
}

const moreGroups = [
  {
    label: "Communication",
    rows: [
      ["chat", "Conversations WhatsApp", "3 non lues"],
      ["bell", "Notifications", "Résumé à 19 h"],
    ],
  },
  {
    label: "Entreprise",
    rows: [
      ["users", "Membres & invitations", "2 membres"],
      ["wallet", "Abonnement", "Essentiel · 9 900 FCFA"],
      ["settings", "Paramètres", "Profil, confidentialité"],
    ],
  },
  {
    label: "Aide",
    rows: [
      ["phone", "Aide & assistance", "Nous sommes là pour vous"],
      ["wifi", "État de synchronisation", "Tout est à jour"],
    ],
  },
];

function More() {
  const [searching, setSearching] = useState(false);
  return (
    <div className="screen-content">
      <section className="page-heading more-heading">
        <div>
          <p className="eyebrow">BizAgents CI</p>
          <h1>Plus</h1>
        </div>
        <button className="icon-btn surface" onClick={() => setSearching(!searching)}>
          <Icon name={searching ? "close" : "search"} />
        </button>
      </section>
      {searching && (
        <div className="search-box">
          <Icon name="search" />
          <input autoFocus placeholder="Rechercher un écran…" />
        </div>
      )}
      <section className="whatsapp-card">
        <span className="wa-logo">
          <Icon name="chat" />
        </span>
        <div>
          <b>WhatsApp Business connecté</b>
          <small>+225 07 01 02 03 04</small>
        </div>
        <Badge tone="success">Connecté</Badge>
      </section>
      {moreGroups.map((group) => (
        <section className="more-group" key={group.label}>
          <p className="group-label">{group.label}</p>
          {group.rows.map(([icon, title, detail]) => (
            <button key={title}>
              <span className="more-icon">
                <Icon name={icon as IconName} />
              </span>
              <span>
                <b>{title}</b>
                <small>{detail}</small>
              </span>
              <Icon name="chevron" />
            </button>
          ))}
        </section>
      ))}
      <section className="plan-card">
        <span>
          <Icon name="spark" />
          <b>Votre équipe a réalisé 342 actions ce mois-ci</b>
        </span>
        <div>
          <i />
          <i />
        </div>
        <small>342 sur 500 actions incluses</small>
        <Button variant="secondary">Voir mon abonnement</Button>
      </section>
      <p className="version">BizAgents CI · version 1.0.0</p>
    </div>
  );
}

function ActionSheet({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);
  return (
    <div className="overlay" onMouseDown={onClose}>
      <section className="sheet" onMouseDown={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />
        <div className="sheet-head">
          <div>
            <p className="eyebrow">Action proposée</p>
            <h2>{done ? "Action validée" : "Valider la remise ?"}</h2>
          </div>
          <button className="icon-btn surface" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        {done ? (
          <div className="success-state">
            <span>
              <Icon name="check" size={34} />
            </span>
            <h3>C’est fait !</h3>
            <p>
              Koffi va envoyer le devis corrigé à Maison Kadi. Vous pouvez continuer votre journée.
            </p>
            <Button onClick={onClose}>Terminer</Button>
          </div>
        ) : (
          <>
            <div className="sheet-client">
              <span>MK</span>
              <div>
                <b>Maison Kadi</b>
                <small>Cliente depuis février 2024</small>
              </div>
            </div>
            <div className="proposal">
              <span>Proposition de Koffi</span>
              <p>Accorder une remise exceptionnelle de 5 % pour finaliser la commande.</p>
              <div>
                <span>Nouveau total</span>
                <b>215 000 FCFA</b>
              </div>
            </div>
            <div className="sheet-note">
              <Icon name="spark" />
              <p>
                <b>Pourquoi cette proposition ?</b>
                <br />
                Cette cliente a commandé 6 fois et paie toujours à temps.
              </p>
            </div>
            <div className="sheet-actions">
              <Button variant="ghost" onClick={onClose}>
                Corriger
              </Button>
              <Button icon="check" onClick={() => setDone(true)}>
                Valider et envoyer
              </Button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

function BottomNav({ screen, onChange }: { screen: Screen; onChange: (s: Screen) => void }) {
  const items: { id: Screen; label: string; icon: IconName; badge?: string }[] = [
    { id: "home", label: "Accueil", icon: "home" },
    { id: "validate", label: "À valider", icon: "check", badge: "4" },
    { id: "team", label: "Équipe", icon: "users" },
    { id: "sales", label: "Ventes", icon: "chart" },
    { id: "more", label: "Plus", icon: "grid" },
  ];
  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          className={screen === item.id ? "active" : ""}
          onClick={() => onChange(item.id)}
          key={item.id}
        >
          <span className="nav-icon">
            <Icon name={item.icon} />
            {item.badge && <i>{item.badge}</i>}
          </span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [dark, setDark] = useState(false);
  const [offline, setOffline] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const content = useMemo(() => {
    if (screen === "validate") return <Validate onOpenAction={() => setShowAction(true)} />;
    if (screen === "team") return <Team />;
    if (screen === "sales") return <Sales />;
    if (screen === "more") return <More />;
    return (
      <Home onOpenAction={() => setShowAction(true)} onNavigate={setScreen} offline={offline} />
    );
  }, [screen, offline]);

  return (
    <main className={dark ? "app dark" : "app"}>
      <div className="phone-shell">
        <Header dark={dark} setDark={setDark} offline={offline} setOffline={setOffline} />
        {content}
        <BottomNav screen={screen} onChange={setScreen} />
        {showAction && <ActionSheet onClose={() => setShowAction(false)} />}
      </div>
    </main>
  );
}
