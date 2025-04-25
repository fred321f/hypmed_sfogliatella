import { connectDB } from '../utility/db';

export default defineEventHandler(async () => {
    try {
        const db = await connectDB();
        console.log('Successfully connected to MongoDB'); // Add logging
        
        const teachers = await db.collection('teachers').find().toArray();
        console.log('Fetched teachers:', teachers); // Log the results
        
        return { success: true, data: teachers };
    } catch (error) {
        console.error('Error fetching teachers:', error);
        return { 
            success: false, 
            message: 'Failed to fetch teachers',
            error: (error as Error).message // Include error message in response
        };
    }
});