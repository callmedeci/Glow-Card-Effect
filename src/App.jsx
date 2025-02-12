import { Moon, Sun } from 'lucide-react';
import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Glow, GlowArea } from './Glow';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((theme) => !theme);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <section className='w-full min-h-dvh flex items-center justify-center p-10 relative'>
      <Button
        onClick={toggleTheme}
        className='absolute top-10 left-10 cursor-pointer'
        size='icon'
      >
        {isDark && <Moon size={48} color='var(--color-zinc-800)' />}
        {!isDark && <Sun size={48} color='var(--color-zinc-200)' />}
      </Button>

      <GlowArea className='flex gap-5'>
        <Glow color='var(--color-rose-800)' className='rounded-xl'>
          <Card className='max-w-lg'>
            <CardHeader>
              <CardTitle>Glow card 1</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                animi
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button className='cursor-pointer flex-1'>Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>

        <Glow color='var(--color-teal-700)' className='rounded-xl'>
          <Card className='max-w-lg'>
            <CardHeader>
              <CardTitle>Glow card 2</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                animi
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button className='cursor-pointer flex-1'>Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>

        <Glow color='var(--color-amber-700)' className='rounded-xl'>
          <Card className='max-w-lg'>
            <CardHeader>
              <CardTitle>Glow card 3</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                animi
              </CardDescription>
            </CardContent>

            <CardFooter>
              <Button className='cursor-pointer flex-1'>Subscribe</Button>
            </CardFooter>
          </Card>
        </Glow>
      </GlowArea>
    </section>
  );
}

export default App;
