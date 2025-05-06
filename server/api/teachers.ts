import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
    try {
        const db = await connectDB();
        console.log('Successfully connected to MongoDB');

        const query = getQuery(event);
        if (query.name) {
            // Fetch a single teacher by name
            const teacher = await db.collection('teachers').findOne({ name: query.name });
            if (!teacher) {
                return { success: false, message: 'Teacher not found' };
            }
            return { success: true, data: teacher };
        }

        // Fetch all teachers if no name is provided
        const teachers = await db.collection('teachers').find().toArray();
        console.log('Fetched teachers:', teachers);

        return { success: true, data: teachers };
    } catch (error) {
        console.error('Error fetching teachers:', error);
        return { 
            success: false, 
            message: 'Failed to fetch teachers',
            error: (error as Error).message
        };
    }
});
