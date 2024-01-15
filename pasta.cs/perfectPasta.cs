using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Comprobemos la pasta!");
        
        // Set the initial cooking time for the pasta
        int initialCookingTime = 10; // in minutes

        // Call the recursive function to check if the pasta is done
        if (IsPastaDone(initialCookingTime))
        {
            Console.WriteLine("La pasta está hecha!");
        }
        else
        {
            Console.WriteLine("La pasta no está hecha");
        }
    }

    static bool IsPastaDone(int cookingTime)
    {
        // Base case: If cooking time is less than or equal to 0, pasta is done
        if (cookingTime <= 0)
        {
            return true;
        }

        Console.WriteLine($"-a la pasta le faltan: {cookingTime} minutos");

        // Simulate the passage of time (you can replace this with an actual timer)
        System.Threading.Thread.Sleep(1000); // Sleep for 1 second

        // Recursive call with decreased cooking time
        return IsPastaDone(cookingTime - 1);
    }
}