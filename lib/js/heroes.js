// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

const doomfist = {
    name: "Doomfist",
    type: "damage",
    difficulty: "3/3",
    img: "week3.day2.objects/assets/doomfist.png",
    saying: "Only through conflict do we evolve.",
    story: "Recently freed from imprisonment, Doomfist is determined to plunge the world into a new conflict that he believes will make humanity stronger. Akande Ogundimu was born into a well-regarded Nigerian family, heir to its prosthetic-technology company. A highly intelligent and charismatic figure, Ogundimu helped to expand his familys business and position it for the future while dedicating his free time to his first love: competitive martial arts. He trained in traditional African fighting styles, including Dambe and Gidigbo, as well as in wrestling and other modern combat systems, incorporating the most effective techniques into his repertoire. Ogundimu competed in tournaments all over the continent, utilizing his intuition and ability to read opponents alongside his tremendous speed and strength. But when he lost his right arm in the aftermath of the Omnic Crisis, it seemed his martial arts career was finished before he had reached his prime. His companys cybernetic prosthetics allowed him to recover from his injuries, even making him stronger, but these enhancements rendered him ineligible for competition. He tried to devote himself to his business with the same zeal that he had for fighting, but he found nothing that could fill the void… until he was given a new opportunity by Akinjide Adeyemi, better known to the world as the second Doomfist, the Scourge of Numbani. Adeyemi offered Ogundimu the chance to fight with him as a mercenary. Initially wary, Ogundimu accepted, and discovered that he now had an arena in which he could unleash his enhanced capabilities. Eventually, Adeyemi brought him into the Talon organization. Talon's belief that humanity would be made stronger through conflict resonated with Ogundimu's personal experiences. Moreover, Talon's power struggles presented a new challenge that allowed him to use his talent in the boardroom along with his cunning as a combatant. Adeyemi was a useful asset to Talon, but the organization saw far greater potential in Ogundimu, with his intelligence and his ability to inspire as a commander. While Adeyemi was content to profit from raids on Numbani, Ogundimu had a grander vision. This difference in aspiration would lead Ogundimu to kill his teacher and take on the mantle of Doomfist, along with the eponymous gauntlet. As the new Doomfist, Ogundimu rose high in Talon and helped to orchestrate a conflict that the organization hoped would someday engulf the world. However, before their plan came to fruition, Ogundimu was defeated and captured by an Overwatch strike team that included Tracer, Winston, and Genji. He was imprisoned in a maximum-security facility for years, where he waited patiently for events he had incited to play out. Finally, he sensed that the time had come for him to return. He broke out of his prison and recovered Doomfist's gauntlet in a one-sided battle with Numbani's newly unveiled OR15 defense robots. Now, he has retaken his place in Talon's inner council, ready to spark a war that will consume the world once again.",
    abilities: [
        {
            name: "HAND CANNON",
            description: "Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.",
        },
        {
            name: "SEISMIC SLAM",
            description: "Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.",
        },
        {
            name: "RISING UPPERCUT",
            description: "Doomfist uppercuts enemies in front of him into the air.",
        },
        {
            name: "ROCKET PUNCH",
            description: "After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.",
        },
        {
            name: "METEOR STRIKE",
            description: "Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.",
        }
    ]
}

const lucio = {
    name: "Lúcio",
    type: "support",
    difficulty: "2/3",
    img: "assets/lucio.png",
    saying: "Come on, let's bring it together",
    story: "Lúcio is an international celebrity who inspires social change through his music and actions. Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows. But Lúcio's close-knit community was thrown into chaos when the multinational Vishkar Corporation secured a contract to redevelop large tracts of the city. Lúcio and his neighbors had been told that the development would improve their lives. However, that promise never became a reality. Vishkar imposed controls on the residents in the name of building a more orderly society: enforcing curfews, cracking down on what the company perceived as lawless behavior, and exploiting the populace as a cheap labor force. Lúcio wouldn't stand for it. He stole Vishkar sonic technology that had been used to suppress the people, and he converted it into a tool to rally them to action. In a popular uprising, they drove Vishkar out of their neighborhoods. Lúcio's leadership made him a star overnight and a symbol for positive social change. His music skyrocketed in popularity. Whereas he had once performed locally, he was now filling arenas across the world. With his newfound fame, Lúcio realizes that he has an opportunity to make a difference and change the world for the better.",
    abilities: [
        {
            name: "SONIC AMPLIFIER",
            description: "Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.",
        },
        {
            name: "CROSSFADE",
            description: "Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.",
        },
        {
            name: "AMP IT UP",
            description: "Lúcio increases the volume on his speakers, boosting the effects of his songs.",
        },
        {
            name: "SOUND BARRIER",
            description: "Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.",
        },
    ]
}

const orisa = {
    name: "Orisa",
    type: "tank",
    difficulty: "2/3",
    img: "assets/orisa.png",
    saying: "Your safety is my primary concern.",
    story: "Built from parts of one of Numbani's short-lived OR15 defense robots, Orisa is the city's newest protector, though she still has much to learn. Originally put into service before the Omnic Crisis, the OR14 Idina line of security robots was built in Nigeria's massive manufacturing omnium. After the war, they were taken out of production, along with many of the other models used during the crisis. Twenty years later, Numbani revived and recommissioned the OR14 program to protect the city from external threats. These new OR15s were deployed for a short time before they were destroyed in an attack by Doomfist. Following the attack, the program was scrapped, and the civic government sold off the remaining OR15 inventory. Some parts were purchased by eleven-year-old Efi Oladele, a brilliant girl whose early accomplishments in robotics and artificial intelligence had already earned her the Adawe Foundation's genius grant. With the approval of her understanding and open-minded parents, Efi spent the bulk of her grant money to acquire one of the decommissioned OR15 bots. She believed that Numbani needed a protector and that an upgraded OR15 could do just that. Efi repaired and reconfigured the robot and installed a personality core that she had designed herself. She named Numbani's newest hero Orisa. Orisa has shown that she can be of service to the city, but she is still working toward finding her optimal protocols. The omnic's inexperience can cause her to be an occasional liability. Fortunately, between Efi's willingness to make the necessary modifications and Orisa's adaptive artificial intelligence, both robot and creator have always been able to set things right. As Orisa starts her career as a guardian, she has much to learn about the world and her functionality. But as long as she is guided by Efi's boundless optimism and her own growing sense of honor and duty, Orisa stands ready to protect Numbani and her creator at any cost.",
    abilities: [
        {
            name: "FUSION DRIVER",
            description: "Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.",
        },
        {
            name: "FORTIFY",
            description: "Orisa temporarily reduces damage she takes, and cannot be affected by action-impairing effects.",
        },
        {
            name: "HALT!",
            description: "Orisa launches a graviton charge which she can detonate, slowing nearby enemies and pulling them towards the explosion.",
        },
        {
            name: "PROTECTIVE BARRIER",
            description: "Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.",
        },
        {
            name: "SUPERCHARGER",
            description: "Orisa deploys a device to increase damage inflicted by allies within her line of sight.",
        }
    ]
}

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

const sombra = {
    name:"sombra",
    type:"damage",
    difficulty:"3/3",
    img:"assets/sombra.png",
    saying:"EVERYTHING CAN BE HACKED… AND EVERYONE.",
    story:"One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    abilities:[
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name:"HACK",
            description:"Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name:"STEALTH",
            description:"Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name:"TRANSLOCATOR",
            description:"Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name:"EMP",
            description:"Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
        {
            name:"MACHINE PISTOL",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        }
    ]
}

const mercy = {
        name:"Mercy",
        type:"support",
        difficulty:"1/3",
        img:"assets/mercy.png",
        saying:"Hero's never die",
        story:"A guardian angel to those who come under her care, Dr. Angela Ziegler is a peerless healer, a brilliant scientist, and a staunch advocate for peace. Ziegler rose to become the head of surgery at a prominent Swiss hospital before pioneering a breakthrough in the field of applied nanobiology that radically improved the treatment of life-threatening illnesses and injuries. It was this expertise that attracted the attention of Overwatch. Because her parents had been taken by war, Ziegler was opposed to the organization's militaristic approach to keeping global peace. Ultimately, she recognized that Overwatch offered her the opportunity to save lives on a much larger scale. As Overwatch's head of medical research, Angela sought to leverage her work for healing in frontline crises. The result was the Valkyrie swift-response suit, which Ziegler herself piloted on many Overwatch missions. Despite her contributions to Overwatch, she was often at odds with her superiors and the organization's overarching aims. When Overwatch dissolved, Ziegler dedicated herself to helping those affected by war. Though she spends most of her time caring for the broken and dispossessed in crisis areas around the world, Dr. Ziegler can be counted on to don her Valkyrie suit whenever innocents are imperiled.",
        abilities:[
            {
                name:"CADUCEUS STAFF",
                description:"Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal."
            },
            {
                name:"CADUCEUS BLASTER",
                description:"Mercy shoots a round from her sidearm."
            },
            {
                name:"GUARDIAN ANGEL",
                description:"Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments."
            },
            {
                name:"RESURRECT",
                description:"Mercy brings a dead ally back into the fight with full health."
            } ,
            {
                name:"ANGELIC DESCENT",
                description:"Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights."
            } ,
            {
                name:"VALKYRIE",
                description:"Gain the ability to fly. Mercy’s abilities are enhanced."
            },
        ]
    }

    const dVa = {
            name:"dVa",
            type:" tank",
            difficulty:"2/3",
            img:"week3.day2.objects/assets/dVa.png",
            saying:"I play to win!",
            story:"D.Va is a former professional gamer who now uses her skills to pilot a state-of-the-art mech in defense of her homeland. Twenty years ago, South Korea was attacked by a colossal omnic monstrosity that rose from the depths of the East China Sea. The massive, lumbering construct caused catastrophic damage to coastal cities before it was driven back beneath the waves. In response, the South Korean government developed a mechanized armored drone unit, called MEKA, to protect urban environments in future engagements with the omnic threat. The government's fears proved to be well founded, as a disturbing pattern of attacks emerged. Every few years, the monstrosity would rise from the sea to assault South Korea and its neighbors. The omnic learned from these encounters, often reconfiguring itself in a different form and appearing with new weapons and capabilities. Each incident ended in a stalemate, with the monstrosity defeated but not destroyed. As the omnic continued to adapt, it eventually disrupted MEKA's drone-control networks, forcing the military to place pilots in the mechs. Scrambling to find suitable candidates, the government turned to the country's professional gamers, who possessed the necessary reflexes and instincts to operate the mechs' advanced weapons systems. Top stars were drafted, including reigning world champion Hana Song, also known as dVa. Famous for her elite skills, D.Va was a fierce competitor who played to win at all costs, and she had a well-earned reputation for showing no mercy to her opponents. Seeing her new mission as a game, D.Va fearlessly charges into battle alongside the rest of her MEKA unit, ready to spring to her nation's defense at a moment's notice. Recently, she has begun to stream combat operations to her adoring fans, and her growing following has turned her into a global icon.",
            abilities:[
            {
                    name:"FUSION CANNONS",
                        description:"D.Va's mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active."
                    },
                {
                        name:"LIGHT GUN",
                        description:"While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster."
                    },
                    {
                        name:"BOOSTERS",
                        description:"D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back."
                    },
                    {
                        name:"DEFENSE MATRIX",
                        description:"D.Va can maintain this forward-facing targeting array for a short period of time; while active, it'll stop incoming projectiles."
                    },
                    {
                        name:"MICRO MISSILES",
                        description:"D.Va launches a volley of explosive rockets."
                    },
                    {
                        name:"SELF-DESTRUCT",
                        description:"D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents."
                    },
                    {
                        name:"CALL MECH",
                        description:"If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray."
                    },
            ]
        }
        
// 2) Create an array called "heroes" and store all of the hero object in the array

let heroes = [sombra, lucio, doomfist, dVa, mercy, orisa];

// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 


// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website