using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace proba1102
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] tomb = new int[100];
            int i = 0;
            string s;
            do
            {
                Console.Write("Kérem a tömb {0}. elemét!", i);
                s = Console.ReadLine();
                tomb[i] = Convert.ToInt32(s);
                i++;

            } while (tomb[i] != 0);
            i--;
            Console.WriteLine("\nLegkisebb elem: {0}",tomb.Min());
            Console.WriteLine("Legnagyobb elem: {0}", tomb.Max());
            Console.WriteLine("Összeg:{0}", tomb.Sum());
            Console.WriteLine("Átlag: {0}",tomb.Average());
            Console.WriteLine("\n\nA program futása véget ért! Nyomjon meg egy tetstőleges billentyűt!");
            Console.ReadKey();

        }
    }
}
