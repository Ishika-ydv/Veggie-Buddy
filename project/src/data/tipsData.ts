import { Tip, SeasonalTip } from '../types/tips';

export const tipsData: Tip[] = [
  {
    id: 'tip1',
    title: 'Container Gardening Basics',
    category: 'general',
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: [
      'Container gardening is perfect for rooftop gardens, balconies, and other small spaces. With the right containers, soil, and plants, you can grow a thriving garden almost anywhere.',
      'The key to successful container gardening is understanding the unique needs of plants grown in a limited space. From proper soil selection to adequate drainage, each element plays a crucial role in your garden\'s success.'
    ],
    steps: [
      'Choose containers with drainage holes that are appropriately sized for your plants',
      'Use high-quality potting mix specifically formulated for containers',
      'Select plants suited for container growing',
      'Position containers to receive appropriate sunlight for the plants you\'ve chosen',
      'Water consistently, checking soil moisture frequently as containers dry out faster than ground soil'
    ],
    dosDonts: {
      dos: [
        'Use quality potting soil, not garden soil',
        'Check containers daily for watering needs',
        'Fertilize regularly as nutrients wash out with watering',
        'Choose appropriate container sizes for your plants',
        'Group plants with similar water and sunlight needs'
      ],
      donts: [
        'Don\'t use containers without drainage holes',
        'Don\'t overwater - check soil moisture first',
        'Don\'t overcrowd plants in containers',
        'Don\'t ignore weight restrictions for rooftop gardens',
        'Don\'t forget to rotate containers occasionally for even growth'
      ]
    }
  },
  {
    id: 'tip2',
    title: 'Maximizing Small Spaces',
    category: 'general',
    image: 'https://images.pexels.com/photos/7194914/pexels-photo-7194914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: [
      'Limited space doesn\'t mean limited gardening possibilities. With creative solutions and smart planning, you can maximize your rooftop or balcony garden to grow an abundance of vegetables.',
      'Vertical gardening, succession planting, and interplanting are just a few techniques that can help you make the most of every square inch of your garden space.'
    ],
    steps: [
      'Assess your available space and sunlight conditions',
      'Plan your garden layout to maximize growing area',
      'Incorporate vertical elements like trellises, wall planters, and hanging baskets',
      'Use square foot gardening techniques to organize plantings efficiently',
      'Implement succession planting to keep space productive throughout the season'
    ],
    dosDonts: {
      dos: [
        'Use vertical space with trellises, wall planters, and hanging baskets',
        'Plant high-value crops that give good yields in small spaces',
        'Consider dwarf or bush varieties bred for containers',
        'Practice succession planting to maximize harvests',
        'Interplant compatible crops to use space efficiently'
      ],
      donts: [
        'Don\'t waste space on low-yield crops in very small gardens',
        'Don\'t ignore the vertical dimension of your garden',
        'Don\'t plant too densely, which can lead to disease problems',
        'Don\'t choose sprawling plants unless you can provide adequate support',
        'Don\'t forget about microclimates in your space'
      ]
    }
  },
  {
    id: 'tip3',
    title: 'Soil Health for Container Gardens',
    category: 'general',
    image: 'https://www.thespruce.com/thmb/VA7xpXC6WabuEfrZpJIPWVlOPHw=/4206x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthy-soil-and-how-to-make-it-2539853-hero-fdf9b0280dca41cb8ae9614e6fc4a0b0.jpg',
    content: [
      'The foundation of any successful garden is healthy soil, and this is especially true for container gardens. Container soil needs to provide adequate nutrition, good water retention, and proper drainage.',
      'Unlike in-ground gardens, container soil doesn\'t naturally replenish its nutrients or beneficial microorganisms, so it requires more attention and care.'
    ],
    steps: [
      'Choose a high-quality potting mix designed for containers',
      'Add organic matter like compost to improve soil structure and fertility',
      'Consider incorporating slow-release fertilizers for season-long nutrition',
      'Monitor soil moisture and structure throughout the growing season',
      'Refresh container soil partially or completely each season'
    ],
    dosDonts: {
      dos: [
        'Use container-specific potting mix, not garden soil',
        'Add compost to improve soil structure and fertility',
        'Incorporate slow-release fertilizers for continuous feeding',
        'Check soil pH for specific plant requirements',
        'Refresh soil in perennial containers annually'
      ],
      donts: [
        'Don\'t reuse old potting soil without refreshing it',
        'Don\'t use garden soil in containers (too dense)',
        'Don\'t forget about drainage materials if needed',
        'Don\'t ignore signs of soil compaction or nutrient depletion',
        'Don\'t overuse fertilizers, which can damage plants'
      ]
    }
  },
  {
    id: 'tip4',
    title: 'Managing Common Garden Pests',
    category: 'pests',
    image: 'https://static1.backyardbossimages.com/wordpress/wp-content/uploads/2022/05/Untitled-design-7.png',
    content: [
      'Even rooftop gardens can experience pest problems. The good news is that container gardens often have fewer pest issues than ground-level gardens, and many problems can be managed with organic and non-toxic approaches.',
      'Regular monitoring and early intervention are key to preventing small pest problems from becoming major infestations that damage your plants and reduce your harvest.'
    ],
    steps: [
      'Inspect your plants regularly for signs of pests or damage',
      'Identify the specific pest before treating',
      'Start with the least toxic management options first',
      'Implement physical barriers when appropriate',
      'Introduce beneficial insects when possible'
    ],
    dosDonts: {
      dos: [
        'Inspect plants regularly for early detection',
        'Use physical removal methods when possible',
        'Try insecticidal soaps and neem oil for soft-bodied pests',
        'Plant pest-repellent companions like marigolds and herbs',
        'Maintain plant health to increase pest resistance'
      ],
      donts: [
        'Don\'t use broad-spectrum pesticides that kill beneficial insects',
        'Don\'t ignore early signs of pest problems',
        'Don\'t forget to check the undersides of leaves where pests hide',
        'Don\'t overwater or overfertilize, which can attract pests',
        'Don\'t bring indoor houseplants outside without checking for pests'
      ]
    }
  },
  {
    id: 'tip5',
    title: 'Watering Techniques for Container Gardens',
    category: 'watering',
    image: 'https://images.pexels.com/photos/1210483/pexels-photo-1210483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: [
      'Proper watering is one of the most critical aspects of container gardening. Containers dry out faster than in-ground gardens, especially in sunny, windy rooftop conditions.',
      'Learning to water efficiently not only keeps your plants healthy but also conserves water and saves you time and effort in the long run.'
    ],
    steps: [
      'Check soil moisture before watering by inserting your finger 1-2 inches into the soil',
      'Water thoroughly until water runs out the drainage holes',
      'Water at the base of plants to keep foliage dry and prevent disease',
      'Consider self-watering containers or irrigation systems for consistent moisture',
      'Adjust watering frequency based on weather conditions and plant needs'
    ],
    dosDonts: {
      dos: [
        'Water deeply and thoroughly when needed',
        'Check soil moisture before watering',
        'Water in the morning when possible',
        'Use mulch to reduce evaporation',
        'Group plants with similar water needs together'
      ],
      donts: [
        'Don\'t follow a rigid watering schedule - check soil moisture instead',
        'Don\'t wet foliage unnecessarily, which can promote disease',
        'Don\'t let containers sit in standing water',
        'Don\'t assume rain has adequately watered containers',
        'Don\'t forget to adjust watering during extreme weather'
      ]
    }
  },
  {
    id: 'tip6',
    title: 'Dealing with Aphids Naturally',
    category: 'pests',
    image: 'https://cdn.mos.cms.futurecdn.net/wpxqE5KoTscXNeAnmJrWv-1200-80.jpg',
    content: [
      'Aphids are small, soft-bodied insects that can quickly multiply and damage your plants by sucking sap from stems and leaves. They\'re particularly fond of new growth and can transmit plant diseases.',
      'Fortunately, there are many effective natural methods to control aphids without resorting to harmful chemicals that might damage your edible plants or the environment.'
    ],
    steps: [
      'Identify aphid infestation - look for clusters of small insects on new growth or leaf undersides',
      'Spray affected plants with a strong stream of water to dislodge aphids',
      'Apply insecticidal soap or neem oil solution to affected areas',
      'Release beneficial insects like ladybugs or lacewings if appropriate',
      'Monitor plants regularly to catch new infestations early'
    ],
    dosDonts: {
      dos: [
        'Remove heavily infested plant parts',
        'Spray plants with water to knock off aphids',
        'Use insecticidal soap for persistent problems',
        'Attract natural predators like ladybugs',
        'Keep plants healthy to increase resistance'
      ],
      donts: [
        'Don\'t ignore early signs of infestation',
        'Don\'t overfertilize with nitrogen, which attracts aphids',
        'Don\'t use broad-spectrum insecticides that kill beneficial insects',
        'Don\'t plant the same crops in the same containers year after year',
        'Don\'t forget to check new plants for aphids before adding to your garden'
      ]
    }
  },
  {
    id: 'tip7',
    title: 'Water Conservation Techniques',
    category: 'watering',
    image: 'https://images.pexels.com/photos/869210/pexels-photo-869210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: [
      'Water is a precious resource, and using it efficiently in your rooftop garden is both environmentally responsible and beneficial for your plants. Container gardens typically need more frequent watering than in-ground gardens, making conservation techniques especially important.',
      'By implementing smart watering practices, you can reduce water usage while still maintaining a thriving garden.'
    ],
    steps: [
      'Install a rain barrel to collect rainwater for your garden',
      'Apply mulch to container surfaces to reduce evaporation',
      'Group plants with similar water needs together',
      'Consider installing a drip irrigation system with a timer',
      'Use self-watering containers or water-absorbing polymers in potting mix'
    ],
    dosDonts: {
      dos: [
        'Collect and use rainwater when possible',
        'Water deeply but less frequently to encourage deep roots',
        'Apply organic mulch to reduce evaporation',
        'Choose drought-tolerant varieties when appropriate',
        'Water in the early morning to reduce evaporation'
      ],
      donts: [
        'Don\'t overwater - check soil moisture first',
        'Don\'t water during the hottest part of the day',
        'Don\'t allow water to run off without being absorbed',
        'Don\'t forget to adjust watering during rainy periods',
        'Don\'t use sprinklers that waste water through evaporation'
      ]
    }
  },
  {
    id: 'tip8',
    title: 'Natural Fungus Prevention',
    category: 'pests',
    image: 'https://www.epicgardening.com/wp-content/uploads/2023/11/Septoria-Leaf-Spot.jpeg',
    content: [
      'Fungal diseases like powdery mildew, leaf spot, and blight can quickly spread through a garden, especially in humid conditions or when plants are crowded. Prevention is much easier than treatment once fungi have established.',
      'By creating conditions that discourage fungal growth and using natural preventive measures, you can keep your plants healthy and productive.'
    ],
    steps: [
      'Space plants properly to ensure good air circulation',
      'Water at the base of plants, keeping foliage dry',
      'Remove and dispose of any infected plant material immediately',
      'Apply organic preventive sprays like diluted milk or baking soda solutions',
      'Rotate crops in containers annually to prevent disease buildup'
    ],
    dosDonts: {
      dos: [
        'Ensure good air circulation between plants',
        'Water at the base of plants in the morning',
        'Remove dead or diseased plant material promptly',
        'Use resistant varieties when available',
        'Apply organic preventive sprays during humid weather'
      ],
      donts: [
        'Don\'t overcrowd plants in containers',
        'Don\'t wet foliage unnecessarily',
        'Don\'t compost diseased plant material',
        'Don\'t ignore early signs of fungal problems',
        'Don\'t overwater, which creates favorable conditions for fungi'
      ]
    }
  },
  {
    id: 'tip9',
    title: 'Deep Watering Techniques',
    category: 'watering',
    image: 'https://images.pexels.com/photos/7730184/pexels-photo-7730184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: [
      'Deep watering encourages plants to develop strong, extensive root systems that can access moisture even during dry periods. In container gardens, proper deep watering techniques are essential for plant health and drought resistance.',
      'By watering thoroughly but less frequently, you can train your plants to develop deeper roots and become more resilient to heat and water stress.'
    ],
    steps: [
      'Water slowly and thoroughly until water runs out the drainage holes',
      'Allow the top 1-2 inches of soil to dry out before watering again',
      'Use a moisture meter or finger test to check soil moisture at depth',
      'Consider bottom watering for some containers to encourage deep root growth',
      'Adjust watering frequency based on plant type, container size, and weather conditions'
    ],
    dosDonts: {
      dos: [
        'Water deeply to encourage deep root development',
        'Check soil moisture before watering',
        'Allow soil to dry slightly between waterings for most plants',
        'Use self-watering containers for consistent moisture',
        'Adjust watering based on individual plant needs'
      ],
      donts: [
        'Don\'t give plants frequent shallow waterings',
        'Don\'t assume all plants have the same water requirements',
        'Don\'t water on a fixed schedule without checking soil moisture',
        'Don\'t let containers dry out completely, which can stress plants',
        'Don\'t overwater, which can lead to root rot and other problems'
      ]
    }
  },
  {
    id: 'tip10',
    title: 'Companion Planting Basics',
    category: 'general',
    image: 'https://cdn.mos.cms.futurecdn.net/HQEdFWSSv67YV6rGL5hHuX-1280-80.jpg.webp',
    content: [
      'Companion planting is the practice of growing certain plants near each other for mutual benefit. These benefits can include pest deterrence, improved pollination, enhanced growth, and maximized use of space.',
      'In container and rooftop gardens, thoughtful companion planting can help you create a more resilient, productive, and balanced growing environment.'
    ],
    steps: [
      'Research traditional companion plant combinations',
      'Consider plant heights and growth habits when planning',
      'Pair heavy feeders with light feeders or nitrogen-fixing plants',
      'Include flowering plants to attract pollinators and beneficial insects',
      'Observe and record which combinations work well in your garden'
    ],
    dosDonts: {
      dos: [
        'Plant aromatic herbs to repel pests from vegetables',
        'Use flowers like marigolds and nasturtiums to deter pests',
        'Combine plants with different root depths in the same container',
        'Plant shade-tolerant crops under taller plants',
        'Mix quick-growing crops with slow-growing ones'
      ],
      donts: [
        'Don\'t crowd incompatible plants together',
        'Don\'t ignore the mature size of plants when planning',
        'Don\'t plant heavy feeders together without adequate nutrients',
        'Don\'t forget about allelopathic plants that inhibit others',
        'Don\'t rely solely on companion planting for pest control'
      ]
    }
  }
];

export const seasonalTipsData: SeasonalTip[] = [
  {
    id: 'season1',
    season: 'Spring',
    tasks: [
      'Clean and prepare containers for planting',
      'Start seeds indoors for summer crops like tomatoes and peppers',
      'Direct sow cool-season crops like lettuce, spinach, and peas',
      'Apply fresh compost to containers',
      'Set up trellises and supports for climbing plants',
      'Begin hardening off seedlings for transplanting',
      'Install drip irrigation systems before summer heat',
      'Watch for early-season pests like aphids and treat promptly',
      'Thin seedlings to proper spacing as they grow',
      'Begin fertilizing established plants with balanced organic fertilizer'
    ]
  },
  {
    id: 'season2',
    season: 'Summer',
    tasks: [
      'Water containers deeply and regularly, especially during heat waves',
      'Apply mulch to retain moisture and keep roots cool',
      'Harvest regularly to encourage continued production',
      'Monitor for pests and diseases, treating promptly',
      'Provide shade for heat-sensitive plants during extreme temperatures',
      'Succession plant quick-growing crops like lettuce and radishes',
      'Support heavy-fruiting plants like tomatoes and peppers',
      'Prune tomato suckers and other plants as needed',
      'Fertilize heavy feeders every 2-3 weeks',
      'Begin planning and starting seeds for fall crops'
    ]
  },
  {
    id: 'season3',
    season: 'Fall',
    tasks: [
      'Plant cool-season crops for fall harvest',
      'Harvest and preserve summer vegetables',
      'Clean up spent plants and add to compost',
      'Prepare protection for frost-sensitive plants you want to extend',
      'Plant cover crops in empty containers to improve soil',
      'Collect seeds from heirloom varieties for next year',
      'Clean and sanitize garden tools and supplies',
      'Apply compost to containers that will winter over',
      'Reduce watering as temperatures cool and growth slows',
      'Protect container soil from heavy rain with covers or moving under shelter'
    ]
  },
  {
    id: 'season4',
    season: 'Winter',
    tasks: [
      'Protect perennial plants and containers from freezing',
      'Move sensitive containers to sheltered locations',
      'Maintain winter crops like kale and spinach under protection',
      'Plan next year\'s garden and order seeds',
      'Clean and repair tools and equipment',
      'Start seeds indoors for early spring planting',
      'Check stored vegetables and preserves regularly',
      'Inspect overwintering plants for pests or disease',
      'Add protection during extreme cold snaps',
      'Attend garden workshops or courses to expand knowledge'
    ]
  }
];