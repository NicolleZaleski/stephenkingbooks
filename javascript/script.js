const apiUrl = "https://stephen-king-api.onrender.com/api/books";



// Função para buscar livros aleatórios ou pesquisar por nome
async function fetchBooks(query = "") {
    try {
        const response = await fetch("https://stephen-king-api.onrender.com/api/books");
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result = await response.json();
        const data = result.data;

        if (Array.isArray(data)) {
            let books = data.slice(0,63);
            if(query) {
                books = books.filter (book =>
                    book.Title.toLowerCase().includes(query.toLowerCase())
                );
            }
            renderCards (books);
        } else {
            throw new Error('The "data" property is not an array!')
        }
    } catch (error) {
        console.log('Error when searching for books:',error.message);
    }
}

const bookImages = {
    "Carrie": "https://m.media-amazon.com/images/I/81SVJuNeq8L._AC_UF1000,1000_QL80_.jpg",
    "Salem's Lot": "https://m.media-amazon.com/images/I/91-vLghDChL._AC_UF1000,1000_QL80_.jpg",
    "Doctor Sleep": "https://m.media-amazon.com/images/I/71dQ92+vTHL._AC_UF894,1000_QL80_.jpg",
    "The Shining": "https://m.media-amazon.com/images/I/81CuEX3W9UL._AC_UF894,1000_QL80_.jpg",
    "Rage": "https://m.media-amazon.com/images/I/51WPrmvbNSL._AC_UF1000,1000_QL80_.jpg",
    "The Stand": "https://m.media-amazon.com/images/I/71-Hcgk9ErL._AC_UF894,1000_QL80_.jpg",
    "The Long Walk": "https://m.media-amazon.com/images/I/81cW2xNlv8L._AC_UF1000,1000_QL80_.jpg",
    "The Dead Zone": "https://m.media-amazon.com/images/I/51l4OLvTGgL._AC_UF1000,1000_QL80_.jpg",
    "Firestarter": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Firestarter_%281980%29_front_cover%2C_first_edition.jpg",
    "Roadwork": "https://m.media-amazon.com/images/I/81P0edyQh9L._AC_UF1000,1000_QL80_.jpg",
    "Cujo": "https://m.media-amazon.com/images/I/91Y8zTiwlUL._AC_UF894,1000_QL80_.jpg",
    "The Running Man": "https://m.media-amazon.com/images/I/811cUzLWLaL._AC_UF1000,1000_QL80_.jpg",
    "The Dark Tower: The Gunslinger": "https://m.media-amazon.com/images/I/71LOqN4EvIL._AC_UF894,1000_QL80_.jpg",
    "Christine": "https://m.media-amazon.com/images/I/81kV4ZFR6TL._UF894,1000_QL80_.jpg",
    "Pet Sematary": "https://m.media-amazon.com/images/I/81Oth+TV0dL._AC_UF1000,1000_QL80_.jpg",
    "Cycle of the Werewolf": "https://m.media-amazon.com/images/I/71XbWSQLlrL._AC_UF894,1000_QL80_.jpg",
    "The Eyes of the Dragon": "https://m.media-amazon.com/images/I/819azRRCZyL.jpg",
    "Thinner": "https://m.media-amazon.com/images/I/71dUC6EbejL.jpg",
    "The Dark Tower II: The Drawing of the Three": "https://m.media-amazon.com/images/I/91PHYFSBgfL.jpg",
    "Misery": "https://upload.wikimedia.org/wikipedia/commons/1/14/Misery_%281987%29_front_cover%2C_first_edition.jpg",
    "The Tommyknockers": "https://m.media-amazon.com/images/I/814EEAhqkpL._UF894,1000_QL80_.jpg",
    "The Dark Half": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1430122353i/11597.jpg",
    "The Dark Tower III: The Waste Lands": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532334476l/34084.jpg",
    "Needful Things": "https://m.media-amazon.com/images/I/61aaI2CdY3L._AC_UF1000,1000_QL80_.jpg",
    "Gerald's Game": "https://m.media-amazon.com/images/I/81D1MekgL2L._AC_UF894,1000_QL80_.jpg",
    "Dolores Claiborne": "https://m.media-amazon.com/images/I/61q7GFmBnJL._AC_UF1000,1000_QL80_.jpg",
    "Insomnia": "https://m.media-amazon.com/images/I/81ahPQ4PcSL._UF894,1000_QL80_.jpg",
    "Rose Madder": "https://m.media-amazon.com/images/I/81vH06h9S4L._AC_UF1000,1000_QL80_.jpg",
    "The Dark Tower IV: Wizard and Glass": "https://m.media-amazon.com/images/I/71XDBpEmYHL._UF894,1000_QL80_.jpg",
    "Black House": "https://m.media-amazon.com/images/I/81dlp6luQHL._AC_UF894,1000_QL80_.jpg",
    "From a Buick 8": "https://m.media-amazon.com/images/I/814+X0-ea6L.jpg",
    "The Dark Tower V: Wolves of the Calla": "https://m.media-amazon.com/images/I/91tPFTruTFL._AC_UF1000,1000_QL80_.jpg",
    "The Dark Tower VI: Song of Susannah": "https://m.media-amazon.com/images/I/91afbsPeg+L._UF894,1000_QL80_.jpg",
    "The Dark Tower VII: The Dark Tower": "https://m.media-amazon.com/images/I/914IuzI3++L._UF894,1000_QL80_.jpg",
    "The Colorado Kid": "https://m.media-amazon.com/images/I/81tacbjc8ML._UF894,1000_QL80_.jpg",
    "Cell": "https://m.media-amazon.com/images/I/61tzbleToFL._AC_UF1000,1000_QL80_.jpg",
    "Lisey's Story": "https://m.media-amazon.com/images/I/710M7TdNurL.jpg",
    "Under the Dome": "https://m.media-amazon.com/images/I/81BIniNN9oL._AC_UF894,1000_QL80_.jpg",
    "The Dark Tower: The Wind Through the Keyhole": "https://m.media-amazon.com/images/I/91xib2N15WL._UF894,1000_QL80_.jpg",
    "Joyland": "https://m.media-amazon.com/images/I/81xkL3UroYL._AC_UF1000,1000_QL80_.jpg",
    "It": "https://m.media-amazon.com/images/I/61pjyMrRCSL._AC_UF1000,1000_QL80_.jpg",
    "The Talisman": "https://m.media-amazon.com/images/I/81Dqkr8H0LL._AC_UF1000,1000_QL80_.jpg",
    "The Stand Uncut": "https://m.media-amazon.com/images/I/71-FDq0U76L._AC_UF1000,1000_QL80_.jpg",
    "The Green Mile": "https://m.media-amazon.com/images/I/91pm+oEatJL.jpg",
    "Desperation": "https://m.media-amazon.com/images/I/91Xdkod41aL._AC_UF894,1000_QL80_.jpg",
    "The Regulators": "https://m.media-amazon.com/images/I/81G0go-k+2L._AC_UF1000,1000_QL80_.jpg",
    "Bag of Bones": "https://m.media-amazon.com/images/I/71DsfiTEugL._AC_UF1000,1000_QL80_.jpg",
    "The Girl Who Loved Tom Gordon": "https://m.media-amazon.com/images/I/91KS9+EfF+L._AC_UF894,1000_QL80_.jpg",
    "Dreamcatcher": "https://m.media-amazon.com/images/I/91Lv21wOG8L._UF894,1000_QL80_.jpg",
    "Blaze": "https://m.media-amazon.com/images/I/71DL-3oS7qL._AC_UF894,1000_QL80_.jpg",
    "Duma Key": "https://m.media-amazon.com/images/I/81trQx4qJdL._UF894,1000_QL80_.jpg",
    "11/22/63": "https://m.media-amazon.com/images/I/717e5mrJz+L.jpg",
    "Mr. Mercedes": "https://m.media-amazon.com/images/I/81-yibEueDL._AC_UF1000,1000_QL80_.jpg",
    "Revival": "https://m.media-amazon.com/images/I/81PaljyJOKL._AC_UF1000,1000_QL80_.jpg",
    "Finders Keepers": "https://m.media-amazon.com/images/I/81kL+XBSbHL._AC_UF1000,1000_QL80_.jpg",
    "End of Watch": "https://m.media-amazon.com/images/I/81lPHXF7E0L._AC_UF1000,1000_QL80_.jpg",
    "Gwendy's Button Box": "https://m.media-amazon.com/images/I/91cftc0wBIL._AC_UF1000,1000_QL80_.jpg",
    "Sleeping Beauties": "https://m.media-amazon.com/images/I/71DXYcOBR7L._AC_UF1000,1000_QL80_.jpg",
    "The Outsider": "https://m.media-amazon.com/images/I/91YVPs88hjL._AC_UF894,1000_QL80_.jpg",
    "Elevation": "https://m.media-amazon.com/images/I/81LEr3mj91L.jpg",
    "The Institute": "https://m.media-amazon.com/images/I/71s6siGLrFL._AC_UF1000,1000_QL80_.jpg",
    "Later": "https://m.media-amazon.com/images/I/81EkmsU-OoL._AC_UF1000,1000_QL80_.jpg",
    "Billy Summers": "https://m.media-amazon.com/images/I/81Ln0WUmxzL._AC_UF894,1000_QL80_.jpg"
  };

  const bookDesc = {
    "Carrie": " The story of Carrie White, a shy and bullied teenage girl with telekinetic powers. Living under the control of her fanatically religious mother, Carrie's life takes a dark turn after a cruel prank at her high school prom, leading to a catastrophic and chilling climax. It explores themes of isolation, revenge, and the devastating effects of cruelty.",
    "Salem's Lot": "Tale about a writer, Ben Mears, who returns to the small town of Jerusalem's Lot, only to discover that it is being overrun by vampires. As the town succumbs to darkness, Ben and a small group of allies fight to uncover the truth and confront the ancient evil threatening to consume their community. The novel explores themes of fear, faith, and the corruption of innocence.",
    "Doctor Sleep": "Is the sequel to The Shining, following the life of an adult Danny Torrance. Struggling with the trauma of his past and battling alcoholism, Danny finds purpose working at a hospice, where his psychic abilities help comfort dying patients. He encounters a young girl, Abra, who shares his 'shining' gift and is pursued by a sinister group called the True Knot, who feed on the essence of children with psychic powers. The story explores redemption, resilience, and the enduring battle between good and evil.",
    "The Shining": " Is a psychological horror novel about Jack Torrance, an aspiring writer and recovering alcoholic, who becomes the winter caretaker of the isolated Overlook Hotel. Along with his wife, Wendy, and young son, Danny, who has psychic abilities called 'the shining,' Jack faces sinister forces within the hotel that drive him to madness. As the supernatural and Jack's inner demons collide, the story unfolds in a chilling descent into terror and tragedy.",
    "Rage": "It follows Charlie Decker, a troubled high school student who brings a gun to school, kills a teacher, and takes his classmates hostage. The novel delves into Charlie’s disturbed psyche, the tense interactions during the standoff, and the dark secrets of his peers. It explores themes of anger, alienation, and the impact of psychological trauma.",
    "The Stand": " The survivors are drawn into a battle between good and evil, led by the kind-hearted Mother Abagail and the sinister Randall Flagg. The story explores themes of survival, morality, and the consequences of human choices in a world on the brink of collapse.",
    "The Long Walk": "About a grueling annual competition where 100 teenage boys must walk continuously without falling below a certain speed, or face deadly consequences. Set in a totalitarian society, it delves into themes of endurance, camaraderie, and the psychological toll of survival as the boys push their limits to be the last one standing.",
    "The Dead Zone": "Johnny Smith, a man who awakens from a coma with psychic abilities after a car accident. Johnny can see people's pasts and futures through touch, but his gift becomes a curse as he foresees a catastrophic event involving a rising political figure. Struggling with morality and fate, Johnny must decide how far he'll go to prevent disaster. It’s a gripping tale of power, destiny, and sacrifice.",
    "Firestarter": "Charlie McGee, a young girl with powerful pyrokinesis—the ability to start fires with her mind. After being born to parents who participated in a government experiment granting them psychic abilities, Charlie and her father are relentlessly pursued by a secret agency called The Shop. The story explores themes of control, power, and survival as Charlie struggles to protect herself and those she loves from those who want to exploit her abilities.",
    "Roadwork": "The story follows Bart Dawes, a man struggling with the impending demolition of his home and his job at a factory that is also being shut down. As the construction project progresses, Bart becomes increasingly obsessed with the loss of his personal and emotional foundations. His growing despair leads to erratic behavior, reflecting themes of loss, resistance, and personal breakdown. The novel explores the impact of societal change on an individual's mental state.",
    "Cujo": "About a rabid dog terrorizing a small town. The story centers on Donna Trenton, her son Tad, and their encounter with Cujo, a once-friendly Saint Bernard who becomes violently aggressive after being bitten by a bat. Trapped in a broken-down car during a hot summer day, Donna and Tad must find a way to survive the increasingly dangerous situation while dealing with personal struggles. The novel explores themes of fear, survival, and the unpredictability of life.",
    "The Running Man": " Set in a future society where the poor are forced to participate in a deadly game show for money, the story follows Ben Richards, a man desperate to provide for his family. He enters the brutal Running Man game, where he must evade armed hunters while being televised for the entertainment of the public. As the game progresses, Richards must use all his wits and skills to survive against overwhelming odds. The novel explores themes of media manipulation, societal inequality, and the fight for survival.",
    "The Dark Tower: The Gunslinger": "Is the first book in Stephen King's The Dark Tower series. It follows Roland Deschain, a lone gunslinger on a quest to find the mysterious Dark Tower, which is said to be the nexus of all universes. Along the way, Roland encounters various characters, including Jake Chambers, a young boy, and faces numerous challenges, as he pursues the Man in Black, a mysterious figure who holds knowledge of the Tower's secrets.",
    "Christine": "The car, which is restored by a shy high school student named Arnie Cunningham, begins to take control of him, transforming his personality and his relationships. As Arnie becomes increasingly obsessed with Christine, the car's destructive influence causes harm to those around him, leading to a terrifying and tragic series of events. The novel explores themes of obsession, possession, and the power of evil.",
    "Pet Sematary": "About Louis Creed, a doctor who moves with his family to a rural town in Maine. They discover a mysterious cemetery near their home where pets are buried, and learn that it has the power to bring the dead back to life. When tragedy strikes, Louis faces a horrifying choice that leads to unintended consequences. The novel explores themes of grief, loss, and the dangers of tampering with death.",
    "Cycle of the Werewolf": " The story of a small town plagued by a series of brutal killings during the full moons. The murders are linked to a werewolf, and the townspeople are forced to confront the terrifying creature. The story unfolds over the course of a year, with each chapter representing a different month and the escalating tension as the werewolf's identity is slowly uncovered. The novella blends horror with a sense of community and the passage of time.",
    "The Talisman": "It follows 12-year-old Jack Sawyer, who embarks on a quest to find a mystical artifact called The Talisman in order to save his dying mother. His journey takes him through a parallel world called The Territories, where he encounters dangerous creatures and battles dark forces. The novel blends elements of fantasy, horror, and adventure, exploring themes of good vs. evil, courage, and the power of destiny.",
    "The Eyes of the Dragon": "It follows the story of King Roland, his two sons, Peter and Thomas, and their struggles for the throne after Roland is murdered. The novel centers on Peter's wrongful imprisonment for his father's death and his eventual escape, as he seeks to clear his name and reclaim the throne. The story is filled with intrigue, magic, and betrayal, and features a villainous court magician, Flagg, who plays a central role in the plot.",
    "Thinner": "The story follows Billy Halleck, a well-to-do lawyer who, after accidentally running over and killing an elderly woman, is cursed by her vengeful father. As a result, Billy begins to lose weight uncontrollably, despite eating normally. Desperate to stop the curse, Billy embarks on a dangerous journey, but he soon realizes that the consequences of his actions may be far worse than he anticipated. The novel explores themes of guilt, retribution, and the price of selfishness.",
    "The Dark Tower II: The Drawing of the Three": "Is the second book in Stephen King's The Dark Tower series. It continues the journey of Roland, the last gunslinger, as he pursues the mysterious Dark Tower. In this book, Roland encounters three individuals from different worlds who are drawn into his quest: Eddie Dean, a drug addict from 1980s New York; Susannah Dean, a woman with a troubled past; and the mysterious Odetta Holmes, who is later revealed to have a split personality.",
    "Misery": "About an author named Paul Sheldon, who is kidnapped by his No. 1 fan, Annie Wilkes, after a car accident. Held captive in her remote home, Paul is forced to write a new novel according to Annie's demands. As Annie's mental state deteriorates, Paul faces increasingly brutal conditions and must find a way to escape before it's too late. The book delves into themes of obsession, power, and the fine line between admiration and madness.",
    "The Tommyknockers": "The story takes place in the small town of Haven, Maine, where a writer named Bobbi Anderson discovers a mysterious alien spacecraft buried in the woods. As she and the townspeople begin to unearth the ship, they are gradually influenced by its strange, otherworldly power. The town becomes increasingly controlled by the ship's sinister force, leading to dangerous transformations and a battle for survival. Themes of addiction, power, and the corrupting influence of technology are central to the novel.",
    "The Dark Half": "Thad Beaumont, a writer who previously published under a pseudonym, George Stark. When Stark's identity is publicly revealed, a series of violent events unfold, as Stark seemingly comes to life and begins committing murders. As Thad struggles to stop his dark alter ego, the novel delves into themes of identity, guilt, and the battle between good and evil.",
    "The Dark Tower III: The Waste Lands": "Is the third book in Stephen King's The Dark Tower series. It follows Roland, the last Gunslinger, as he continues his quest to find the Dark Tower. Along the way, he is joined by a diverse group of companions, including Jake Chambers, Eddie Dean, and Susannah Dean. As they journey through a post-apocalyptic landscape filled with strange and dangerous creatures, they face both physical and psychological challenges",
    "Needful Things": "The story revolves around a mysterious store owned by Leland Gaunt, who sells seemingly harmless items to the townspeople, each one tailored to their desires. However, the items come with a dark price: they trigger the worst impulses of the buyers, leading to violence, chaos, and destruction. As tensions rise, the town spirals into a deadly conflict, and the townsfolk must confront the evil that Gaunt represents. The novel explores themes of greed, manipulation, and the darkness within human nature.",
    "Gerald's Game": " It follows Jessie Burlingame, who is handcuffed to a bed in a remote cabin after a kinky game with her husband, Gerald, takes a deadly turn. Struggling to free herself, Jessie must confront both her past traumas and terrifying survival instincts while grappling with her isolation. The novel explores themes of survival, trauma, and the human mind under extreme stress.",
    "Dolores Claiborne": "Centered around Dolores Claiborne, a housekeeper accused of murdering her wealthy employer, Vera Donovan. The novel unfolds through Dolores' confession, revealing her complex life, the abusive relationship with her husband, and the dark secrets she harbors. As she recounts her past, Dolores confronts her own morality, guilt, and the traumatic events that led to the crime, exploring themes of survival, strength, and justice.",
    "Insomnia": "Ralph Roberts, an elderly man in the town of Derry, who begins suffering from insomnia. As his sleep deprivation worsens, Ralph starts to see disturbing visions and strange phenomena, revealing a supernatural battle between good and evil. He discovers that his condition is linked to a mysterious power struggle involving forces that affect life and death. The novel blends supernatural elements with psychological tension, exploring themes of fate, perception, and the consequences of unchecked power.",
    "Rose Madder": "Rosie Daniels, a woman who escapes an abusive marriage and begins a new life. She discovers a mysterious painting in a pawn shop, which becomes a portal to a surreal and dangerous world. As Rosie unravels the painting's connection to her own past, she must confront both her abusive husband, who is relentlessly hunting her, and the dark forces within the painting. The novel explores themes of abuse, self-discovery, and supernatural terror.",
    "The Dark Tower IV: Wizard and Glass": "Is the fourth book in Stephen King's The Dark Tower series. It follows Roland Deschain, the last gunslinger, as he continues his quest to find the Dark Tower. In this installment, Roland and his companions are drawn into a tale from Roland's past, recounting his youthful experiences and tragic love affair with Susan Delgado, a beautiful but doomed woman.",
    "Black House": "It follows former Chicago detective Jack Sawyer, who is called back to his childhood town to investigate a series of mysterious murders. As Jack delves deeper into the case, he discovers a supernatural connection between the killings and a parallel world known as the Territories. The novel blends elements of horror, fantasy, and psychological thriller as Jack faces off against dark forces to protect his world from evil.",
    "From a Buick 8": "That centers on a group of Pennsylvania state troopers who guard a mysterious and otherworldly car that was discovered abandoned on the side of the road. The car, a 1953 Buick Roadmaster, exhibits strange and dangerous properties, seemingly linked to a dark, otherworldly force. The story is told through the perspectives of the troopers, who uncover unsettling secrets about the car's origins and the eerie events surrounding it. The novel blends mystery, supernatural elements, and psychological horror.",
    "The Dark Tower V: Wolves of the Calla": "Is the fifth book in Stephen King's The Dark Tower series. It follows Roland Deschain and his ka-tet as they arrive in the town of Calla Bryn Sturgis, where mysterious wolves come every few years to abduct children. The group must defend the town from these creatures, while dealing with personal challenges and facing new dangers. ",
    "The Dark Tower VI: Song of Susannah": "Is the sixth book in Stephen King's The Dark Tower series. It follows Roland Deschain and his companions as they continue their journey to the Dark Tower. In this installment, Susannah Dean, one of Roland's key allies, is possessed by a demonic entity, causing tension within the group. Meanwhile, Roland struggles with his destiny and the forces trying to stop him. The story blends fantasy, horror, and science fiction, with themes of fate, sacrifice, and the complex interplay between good and evil.",
    "The Dark Tower VII: The Dark Tower": "Is the final book in Stephen King's epic Dark Tower series. It follows Roland Deschain and his ka-tet as they reach the end of their long journey to find the Dark Tower, the nexus of all worlds. As Roland confronts his fate, the group faces numerous challenges, including betrayal, sacrifice, and the realization of the Tower's true significance.",
    "The Colorado Kid": "Set on the small island of Moose Lookit in Maine. The story follows two journalists, Dave and Stephanie, who investigate the mysterious death of a man, found with no identification and no apparent cause of death. As they try to unravel the enigma, they are left with more questions than answers, and the novel explores themes of mystery, uncertainty, and the limitations of knowledge. The book focuses more on the investigation and its ambiguous conclusion than on traditional horror elements.",
    "Cell": "Clayton Riddell, a comic book artist, who survives a global disaster triggered by a mysterious signal transmitted through cell phones. This signal turns ordinary people into violent, mindless killers, referred to as phoners. As Clayton teams up with a group of survivors, they must navigate the chaos and figure out how to survive in a world where technology has become deadly. The novel explores themes of societal collapse, the influence of technology, and survival.",
    "Lisey's Story": "Lisey Landon, the widow of a famous author named Scott Landon. After Scott's death, Lisey is forced to confront the secrets of their past, including his mysterious and supernatural fantasy world and the trauma he endured. As Lisey unravels these dark truths, she is drawn into a dangerous journey that forces her to face both external threats and her own emotional demons. The novel blends elements of horror, romance, and psychological drama.",
    "Under the Dome": "The story takes place in the small town of Chester's Mill, which is suddenly sealed off from the outside world by a mysterious, impenetrable dome. As tensions rise, the townspeople struggle to survive, dealing with limited resources, power struggles, and escalating violence. The novel explores themes of human nature, power, corruption, and survival under extreme circumstances. The dome itself becomes a metaphor for societal and personal isolation.",
    "The Dark Tower: The Wind Through the Keyhole": "It follows Roland Deschain, the last Gunslinger, as he recounts a story from his past to his companions. The tale is about a young boy named Tim who faces a dangerous creature and a mysterious journey. The book is a mix of fantasy and adventure, blending Roland's quest for the Dark Tower with a story within a story, exploring themes of courage, fate, and the fight between good and evil.",
    "Joyland": "Set in the 1970s at a North Carolina amusement park called Joyland. The story follows Devin Jones, a college student who takes a summer job at the park and becomes involved in solving the mystery of a young woman’s murder that occurred there years earlier. As Devin unravels the dark past, he also encounters supernatural elements, friendship, love, and personal growth. The novel blends mystery, coming-of-age, and horror elements, with King’s signature blend of suspense and emotional depth.",
    "It": "It follows a group of childhood friends who are terrorized by a shape-shifting entity, most commonly appearing as a clown named Pennywise. The creature feeds on the fear of children, reappearing every 27 years. As adults, the group reunites to confront It and end its reign of terror, while reflecting on their traumatic past and the bond they share. The novel explores themes of friendship, fear, and the power of memory.",
    "The Stand Uncut": " It follows the aftermath of a man-made plague that wipes out most of the human population, leaving survivors to rebuild society. The novel focuses on two groups: one led by the kind and wise Mother Abagail, and the other by the sinister Randall Flagg. As these groups prepare for a final confrontation, themes of good vs. evil, survival, and morality are explored in a vast and gripping narrative. The uncut edition includes additional scenes and characters not found in the original version.",
    "The Green Mile": "Set in a 1930s Southern American prison. It follows Paul Edgecombe, a death row guard, who becomes involved with John Coffey, a gentle giant with miraculous healing abilities. As Paul learns about John's supernatural powers, he grapples with moral dilemmas surrounding justice, life, and death. The novel explores themes of empathy, injustice, and the supernatural, culminating in an emotionally powerful and tragic conclusion.",
    "Desperation": "Set in the desolate town of Desperation, Nevada. The story follows a group of travelers who are stopped by the corrupt and deranged sheriff, who has been possessed by an ancient, malevolent force. As the group fights to survive, they discover that the town is under the control of an evil entity, and they must band together to stop it. The novel explores themes of survival, faith, and the battle between good and evil.",
    "The Regulators": "It is a thriller that follows a suburban neighborhood where residents are terrorized by a group of violent, otherworldly forces. The story centers on the residents of the Desperation Drive area, where the ordinary becomes chaotic as strange, supernatural events unfold. The novel is a violent, dark tale that examines themes of good versus evil and the consequences of evil actions. The narrative style and characters tie into King's Desperation, creating a unique parallel story.",
    "Bag of Bones": "Centered on Mike Noonan, a bestselling author grieving the death of his wife, Johanna. Seeking solace, Mike retreats to their summer home in Western Maine, where he uncovers mysterious events surrounding the house and its previous owners. As he investigates, he becomes entangled in a haunting mystery involving a long-dead blues singer, a troubled widow, and dark family secrets. The novel explores themes of love, loss, and the lingering influence of the past.",
    "The Girl Who Loved Tom Gordon": "It follows 9-year-old Trisha McFarland, who gets lost in the woods during a hike with her mother and brother. As she struggles to survive, she becomes obsessed with her favorite baseball player, Tom Gordon, imagining him as a guide and protector. Throughout her ordeal, she faces physical and psychological challenges, battling both the elements and a mysterious, malevolent force in the forest. The novel explores themes of survival, fear, and the power of the mind.",
    "Dreamcatcher": " Four childhood friends—Jonesy, Danny, Beaver, and Henry—who reunite in a remote cabin in the woods. While there, they encounter a deadly alien species and a mysterious government operation. As they confront these threats, they must also face personal demons and the bond that ties them together. The novel blends elements of horror, supernatural phenomena, and friendship, with themes of survival, memory, and the battle between good and evil.",
    "Blaze": "It follows the story of Clayton Blaise, a mentally challenged man who, after the death of his criminal partner, kidnaps a baby as part of a ransom plot. As the story unfolds, Blaze struggles with his past, his conscience, and his desperate situation. The novel delves into themes of redemption, guilt, and the complexities of human nature.",
    "Duma Key": "Edgar Freemantle, a successful construction magnate who, after a life-altering accident, moves to a remote island off the coast of Florida to recover. There, he discovers a hidden talent for painting, but the paintings seem to have strange, supernatural powers. As Edgar's art becomes increasingly disturbing, he uncovers dark secrets about the island and its past, leading him into a confrontation with forces beyond his control. The novel blends psychological suspense with supernatural horror.",
    "11/22/63": "Jake Epping, a high school teacher who discovers a time portal in a local diner. He is tasked with preventing the assassination of President John F. Kennedy in 1963. As Jake becomes more deeply involved in the past, he faces numerous challenges and moral dilemmas, learning that changing history comes with unexpected consequences. The novel explores themes of fate, the ripple effect of actions, and the complexities of time travel.",
    "Mr. Mercedes": "The novel follows retired Detective Bill Hodges as he investigates a deranged killer, referred to as Mr. Mercedes, who intentionally drove a stolen Mercedes car into a crowd, killing eight people. The story alternates between Hodges' pursuit of the killer and the perspective of Brady Hartsfield, the psychopath behind the attack. As the tension builds, the cat-and-mouse game escalates, leading to a final confrontation. The book explores themes of obsession, justice, and the dark side of human nature.",
    "Revival": " Is a dark and haunting tale about the lifelong connection between Jamie Morton and Charles Jacobs, a charismatic minister obsessed with electricity's mysterious powers. As their lives intertwine over decades, Jacobs' experiments push the boundaries of science and faith, leading to shocking revelations about the afterlife. The novel explores themes of addiction, loss, and the terrifying unknown.",
    "Finders Keepers": "The story follows Morris Bellamy, a fanatical reader, who murders a reclusive author and steals unpublished manuscripts. Decades later, a boy named Pete Saubers discovers the hidden treasure of cash and manuscripts, unknowingly putting himself in Bellamy's deadly path. Detective Bill Hodges and his team step in to unravel the danger in this gripping tale of crime and justice.",
    "End of Watch": " It follows retired detective Bill Hodges and his partner Holly Gibney as they face Brady Hartsfield, the psychopathic villain from Mr. Mercedes. Despite being in a vegetative state, Brady discovers he can manipulate others through a sinister mind-control device, driving people to commit suicide. Combining crime thriller and supernatural elements, the story explores themes of mortality, redemption, and the enduring fight between good and evil.",
    "Gwendy's Button Box": "It follows Gwendy Peterson, a young girl who is entrusted with a mysterious box by a stranger. The box has buttons that can alter reality and grant wishes, but at a cost. As Gwendy grows up, she struggles with the temptation and moral consequences of using the box's power. The story explores themes of responsibility, temptation, and the complexities of human choices.",
    "Sleeping Beauties": "Is a chilling tale set in a small Appalachian town where women fall victim to a mysterious sleeping sickness, encased in cocoons as they slumber. If disturbed, they become violent. In this women-less world, tensions rise among the men, while one woman, Evie, remains awake, sparking questions about whether she is the cure or the cause. The novel delves into themes of gender dynamics, societal conflicts, and survival.",
    "The Outsider": "The novel begins with the brutal murder of a young boy, for which a beloved local teacher is arrested. Despite overwhelming evidence, strange contradictions arise, pointing to something far more sinister. As the investigation unfolds, it delves into the nature of evil and the blurred lines between reality and the inexplicable.",
    "Elevation": "Is a novella set in the town of Castle Rock, focusing on Scott Carey, a man dealing with a mysterious condition where he loses weight without his appearance changing. As Scott bonds with his neighbors and confronts his illness, the story becomes a heartfelt exploration of community, acceptance, and finding purpose despite life's challenges. It blends a touch of the supernatural with emotional depth and optimism.",
    "The Institute": "Is a gripping thriller about children with extraordinary abilities who are abducted and held in a secret facility known as The Institute. There, they are subjected to experiments and psychological abuse. The story follows Luke Ellis, a gifted boy, as he plots an escape and fights against the sinister organization. It’s a tale of resilience, friendship, and the battle between good and evil.",
    "Later": "Jamie Conklin, a boy with the unsettling ability to see and communicate with the dead. Raised by a struggling single mother, Jamie is drawn into a chilling world of crime and supernatural danger when his gift is exploited by others. Blending horror and mystery, the story delves into themes of morality, growing up, and the consequences of using extraordinary abilities.",
    "Billy Summers": "Is a suspenseful thriller about a hitman with a moral code, taking on one final job before retiring. Disguised as a writer in a small town, Billy wrestles with his past while uncovering layers of deception around the job. It's a gripping tale of redemption, love, and the power of storytelling."
  };

// Função para exibir os cards dos livros
function renderCards(books) {
    const container = document.getElementById("books-container");
    container.innerHTML = ""; // Limpar cards anteriores

    books.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");

        const bookImage = bookImages[book.Title] || 'https://via.placeholder.com/150';
        const bookDescr = bookDesc[book.Title] || "There is no description.";

        card.innerHTML = `
            <img src="${bookImage}" alt="${book.Title}" class="book-image" />
            <div class="card-details">
                <h3>${book.Title}</h3>
                <p>Year: ${book.Year}</p>
                <p>Pages: ${book.Pages}</p>
                <p class="desc">${bookDescr}</p>
                <button onclick="addToFavorites('${book.id}', '${book.Title}')">Add to favorites</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para adicionar um livro aos favoritos
function addToFavorites(id, title) {
    const user = localStorage.getItem("isLoggedIn");
    if (!user) {
        alert("You need to log in to add to favorites!");
        return;
    }

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some(book => book.id === id)) {
        favorites.push({ id, title });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Book added to favorites!");
    } else {
        alert("Book is already in favorites.");
    }
}

// Função para lidar com a pesquisa
function searchBooks() {
    const query = document.getElementById("search").value.trim();
    if (query) {
    fetchBooks(query);
    } else {
        fetchBooks();
    }
}

// Inicializar a página com livros aleatórios
fetchBooks();

