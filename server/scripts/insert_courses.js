// insertClasses.js

import { MongoClient } from 'mongodb';

// Replace the following with your MongoDB connection string
const uri = process.env.MONGO_URI; // or your Atlas URI

// Database and collection names
const dbName = 'yogatella'; // <- change this to your DB name
const collectionName = 'courses';

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to database');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const documents = [
      {
        type: "Yoga",
        name: "Vinyasa",
        taughtBy: "Lucrezia",
        level: "all",
        description: "A dynamic Vinyasa flow class that synchronizes breath with movement, designed to energize the body and calm the mind. Ideal for all levels seeking a fluid, uplifting experience. Expect continuous sequences, mindful breathing, and a graceful rhythm to build strength and flexibility."
      },
      {
        type: "Yoga",
        name: "Forrest yoga",
        taughtBy: "Lucrezia",
        level: "intermediate",
        description: "Forrest Yoga focuses on deep core engagement, breath work, and mindful strength. This intermediate class invites students to explore emotional release and muscular activation through longer-held poses and intentional movement. Ideal for building resilience and inner awareness."
      },
      {
        type: "Yoga",
        name: "Katonah yoga",
        taughtBy: "Marco",
        level: "intermediate",
        description: "A unique blend of Katonah Yoga combining geometric alignment, breath awareness, and Taoist theory. Perfect for beginners and intermediate practitioners looking to deepen their physical and philosophical understanding. Expect intelligent sequences that balance effort and ease."
      },
      {
        type: "Yoga",
        name: "Katonah yoga advanced",
        taughtBy: "Marco",
        level: "advanced",
        description: "A deep dive into the advanced principles of Katonah Yoga, emphasizing structure, breath, and metaphor. This class challenges experienced students to refine posture and perception through complex patterns and detailed alignment work. A journey into both form and introspection."
      },
      {
        type: "Yoga",
        name: "Body mind flow",
        taughtBy: "Denise",
        level: "all",
        description: "A gentle, integrative class designed to harmonize the body and mind. Body Mind Flow invites all levels to explore fluid movement, soft strength, and mindful breathing. It's perfect for stress relief, cultivating presence, and reconnecting to inner balance in a nurturing way."
      },
      {
        type: "Yoga",
        name: "Power yoga",
        taughtBy: "Jennifer",
        level: "intermediate",
        description: "Power Yoga is an invigorating, fitness-based flow that builds strength, stamina, and flexibility. Designed for intermediate practitioners, this class integrates dynamic movement and breath with a focus on endurance, empowerment, and physical challenge. A powerful reset."
      },
      {
        type: "Yoga",
        name: "Mandala flow",
        taughtBy: "Denise",
        level: "beginner",
        description: "Mandala Flow is a circular, creative practice that guides you through sequences in all directions of the mat. Rooted in intention and fluid transitions, this class connects movement with breath in a way that enhances mobility, focus, and creative expression. All levels welcome."
      },
      {
        type: "Meditation",
        name: "Basis of meditation",
        taughtBy: "Denise",
        level: "beginner",
        description: "Learn the essential techniques of meditation with a clear and supportive approach. This beginner class explores posture, breath, and stillness, helping you build a sustainable practice. Designed to reduce stress, increase awareness, and cultivate mental clarity."
      },
      {
        type: "Meditation",
        name: "Yoga Roots",
        taughtBy: "Susanna",
        level: "all",
        description: "Dive into the ancient roots of yoga through meditative exploration. This class draws from yogic philosophy, breath practices, and gentle awareness to connect you to your foundation. A grounding practice that balances energy and deepens spiritual insight."
      },
      {
        type: "Meditation",
        name: "The power of breathing",
        taughtBy: "Susanna",
        level: "all",
        description: "A breath-centered meditation practice that enhances mental clarity, emotional stability, and inner calm. Learn how to harness the breath to navigate stress and develop mindfulness. This class is suitable for all levels seeking a deeply restorative and powerful experience."
      },
      {
        type: "Meditation",
        name: "Meditation advanced",
        taughtBy: "Amadio",
        level: "advanced",
        description: "Designed for advanced meditators, this session offers extended silence, deep energetic work, and refined awareness. Explore subtle dimensions of consciousness, inner landscapes, and non-dual awareness through guidance rooted in ancient traditions. A sacred inward journey."
      }
    ];

    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Disconnected from database');
  }
}

run();
