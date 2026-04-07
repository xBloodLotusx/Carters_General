export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isFavorite?: boolean;
}

export interface MenuSection {
  title: string;
  description?: string;
  items: MenuItem[];
}

export const dailySpecials = [
  "Monday: Closed — Rest & Blessings",
  "Tuesday: Meatloaf Plate with two sides — $9.95",
  "Wednesday: BBQ Pulled Pork Sandwich — $8.95",
  "Thursday: Chicken & Dumplings — $9.95",
  "Friday: Fish Fry Friday! Fried Catfish Plate — $10.95",
  "Saturday: Chef's Choice — Ask us!",
];

export const menuSections: MenuSection[] = [
  {
    title: "Breakfast",
    description: "Served all day — because breakfast shouldn't have a curfew!",
    items: [
      { name: "Belgian Waffle", price: "$6.95", description: "Golden & crispy, served with butter & syrup", isFavorite: true },
      { name: "Blueberry Waffle", price: "$7.95", description: "Topped with fresh blueberries" },
      { name: "Chocolate Chip Waffle", price: "$7.95", description: "A sweet treat any time of day" },
      { name: "Biscuits & Gravy", price: "$5.95", description: "Homemade sausage gravy over fresh-baked biscuits", isFavorite: true },
      { name: "Country Ham & Eggs", price: "$8.95", description: "Two eggs any style with country ham & toast" },
      { name: "Pancake Stack", price: "$5.95", description: "Five-star fluffy pancakes", isFavorite: true },
      { name: "Egg & Cheese Biscuit", price: "$3.95", description: "Simple & satisfying" },
      { name: "Sausage, Egg & Cheese Biscuit", price: "$4.95" },
    ],
  },
  {
    title: "Signature Sandwiches",
    description: "Our famous deli creations — made fresh to order",
    items: [
      { name: "The Flat Bottom", price: "$7.75", description: "A Carter's original — stacked high & delicious", isFavorite: true },
      { name: "The Overboard", price: "$7.95", description: "For the big appetite — loaded with premium meats" },
      { name: "The Outpost", price: "$8.15", description: "Our heartiest sandwich — not for the faint of heart", isFavorite: true },
      { name: "Baby Carter's", price: "$7.75", description: "A lighter take on our classics" },
      { name: "Patty Melt", price: "$7.95", description: "Juicy beef patty with melted cheese on grilled rye" },
      { name: "Fried Bologna & Hoop Cheese", price: "$6.95", description: "A true country classic — old-fashioned & unforgettable", isFavorite: true },
      { name: "Wagyu Beef Burger", price: "$10.95", description: "Premium Wagyu beef, cooked to perfection" },
      { name: "BLT", price: "$6.50", description: "Crispy bacon, fresh lettuce & tomato" },
    ],
  },
  {
    title: "Lunch Plates",
    description: "Hearty plates served with your choice of two sides",
    items: [
      { name: "Fried Chicken Plate", price: "$9.95", description: "Golden fried chicken with two sides" },
      { name: "Country Fried Steak", price: "$9.95", description: "Hand-breaded & smothered in gravy" },
      { name: "Meatloaf Plate", price: "$9.95", description: "Homemade with two sides", isFavorite: true },
      { name: "Fried Catfish Plate", price: "$10.95", description: "Crispy catfish fillets with two sides" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "French Fries", price: "$2.95" },
      { name: "Onion Rings", price: "$3.50" },
      { name: "Coleslaw", price: "$2.50" },
      { name: "Pinto Beans", price: "$2.50" },
      { name: "Mac & Cheese", price: "$2.95" },
      { name: "Mashed Potatoes & Gravy", price: "$2.95" },
      { name: "Green Beans", price: "$2.50" },
      { name: "Side Salad", price: "$3.50" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Sweet Tea", price: "$2.00", description: "Freshly brewed, Southern style", isFavorite: true },
      { name: "Unsweet Tea", price: "$2.00" },
      { name: "Lemonade", price: "$2.50" },
      { name: "Coffee", price: "$1.75" },
      { name: "Hot Chocolate", price: "$2.00" },
      { name: "Soft Drinks", price: "$1.75" },
      { name: "Bottled Water", price: "$1.50" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Homemade Pie Slice", price: "$4.50", description: "Ask about today's flavors!", isFavorite: true },
      { name: "Banana Pudding", price: "$3.95", description: "Made from scratch" },
      { name: "Brownie", price: "$2.95" },
      { name: "Cookie (Fresh Baked)", price: "$1.95" },
    ],
  },
];
