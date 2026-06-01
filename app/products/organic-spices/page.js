import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const tabs = ["All", "Cumin", "Turmeric", "Coriander", "Fennel", "Ginger", "Cinnamon"];

const products = [
  {
    name: "Organic Cumin",
    tag: "Cumin",
    image: "/images/Product%20Images/Organic%20Spices/Cumin.png",
    description: "Certified organic cumin seeds, free-flowing and machine sorted for 99.5% purity. Aromatic, earthy, and cultivated without chemical fertilizers.",
    loadingCapacity: "15 - 16 MT in 20ft container."
  },
  {
    name: "Organic Turmeric",
    tag: "Turmeric",
    image: "/images/Product%20Images/Organic%20Spices/Turmeric.png",
    description: "High curcumin content organic turmeric, offering deep gold color and earthy heat. Sourced from certified estates in pristine agricultural zones.",
    loadingCapacity: "18 - 20 MT in 20ft container."
  },
  {
    name: "Organic Coriander",
    tag: "Coriander",
    image: "/images/Product%20Images/Organic%20Spices/Coriander.png",
    description: "Carefully harvested organic coriander seeds, boasting strong volatile oil content, pleasant citrus-spice aroma, and pesticide-free purity.",
    loadingCapacity: "10 - 11 MT in 20ft container (due to high volume)."
  },
  {
    name: "Organic Fennel",
    tag: "Fennel",
    image: "/images/Product%20Images/Organic%20Spices/Fennel.png",
    description: "Sweet, licorice-scented organic fennel seeds. Cleaned and sortex-sorted. Sourced from farms adhering strictly to organic crop rules.",
    loadingCapacity: "12 - 13 MT in 20ft container."
  },
  {
    name: "Organic Ginger",
    tag: "Ginger",
    image: "/images/Product%20Images/Organic%20Spices/Ginger.png",
    description: "Certified organic dried ginger whole and powder, offering a sharp zesty heat and excellent microbiological safety metrics.",
    loadingCapacity: "14 - 15 MT in 20ft container."
  },
  {
    name: "Organic Cinnamon",
    tag: "Cinnamon",
    image: "/images/Product%20Images/Organic%20Spices/Cinnamon.png",
    description: "Highly aromatic organic cinnamon rolls and powder, boasting sweet woody notes. Processed gently under strict non-chemical clean conditions.",
    loadingCapacity: "12 MT in 20ft container."
  }
];

const theme = {
  banner: "bg-gradient-to-r from-[#825C22] to-[#B78A39]",
  accentText: "text-[#B78A39]",
  accentBorder: "border-[#B78A39]",
  badge: "bg-amber-50 text-amber-700 border-amber-200"
};

const customSpecs = {
  "other-name": {
    title: "Other Name",
    icon: "label",
    values: [
      "Cumin: Jeera, Zeera, Cumino",
      "Turmeric: Haldi, Indian Saffron, Golden Spice",
      "Coriander: Dhania, Cilantro Seed",
      "Fennel: Saunf, Sweet Anise, Finocchio",
      "Ginger: Adrak (fresh), Sonth (dry), Sunthi",
      "Cinnamon: Dalchini, True Cinnamon, Sweet Wood"
    ]
  },
  "botanical-name": {
    title: "Botanical Name",
    icon: "eco",
    values: [
      "Cumin: Cuminum cyminum",
      "Turmeric: Curcuma longa",
      "Coriander: Coriandrum sativum",
      "Fennel: Foeniculum vulgare",
      "Ginger: Zingiber officinale",
      "Cinnamon: Cinnamomum verum / Cinnamomum zeylanicum"
    ]
  },
  "synonyms": {
    title: "Synonyms",
    icon: "translate",
    values: [
      "Cumin: White Cumin, Roman Caraway",
      "Turmeric: Curcuma, Jiang Huang (Chinese), Ukon (Japanese)",
      "Coriander: Chinese Parsley Seed, Koriander",
      "Fennel: Fenouil (French), Fenchel (German)",
      "Ginger: Gingembre (French), Ingwer (German)",
      "Cinnamon: Canela (Spanish), Cannelle (French)"
    ]
  },
  "plant-family": {
    title: "Plant Family",
    icon: "park",
    values: [
      "Cumin & Coriander & Fennel: Apiaceae (Umbelliferae)",
      "Turmeric & Ginger: Zingiberaceae",
      "Cinnamon: Lauraceae"
    ]
  },
  "available-in": {
    title: "Available In",
    icon: "inventory",
    values: [
      "Whole Seeds / Roots / Sticks (as applicable to each spice)",
      "Coarse Ground / Fine Powder (60–80 mesh)",
      "Certified Organic — with valid organic certification documentation",
      "Packing: 20 kg / 25 kg bags or custom private label packaging on request"
    ]
  }
};

export default function OrganicSpicesPage() {
  return (
    <CategoryPageTemplate
      categoryTitle="Organic Spices"
      tabs={tabs}
      products={products}
      theme={theme}
      customSpecs={customSpecs}
    />
  );
}

