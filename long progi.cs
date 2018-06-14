using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace @long
{
    class Program
    {
        static void Main(string[] args)
        {
            //jegyek átlaga
            int[] jegy = new int[100];
            int darab = 0;
            int osszeg = 0;
            string s;
            do
            {
                darab++;
                Console.WriteLine("Kérem a(z) {0}. jegyet!", darab);
                s = Console.ReadLine();
                jegy[darab] = Convert.ToInt32(s);
                osszeg += jegy[darab];

            }
            while (jegy[darab] != 0);
            darab--;
            Console.WriteLine("Jegyek száma : {0}", darab);
            Console.WriteLine("Átlaguk: {0}", osszeg/darab);
            Console.WriteLine("\n\nA program futás végetért! Nyomjon meg egy tetszőleges billentyűt!");
            Console.ReadKey();

        }
    }
}
