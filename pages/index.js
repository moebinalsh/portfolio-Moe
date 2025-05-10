import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [research, setResearch] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/data/research.json').then(res => res.json()).then(setResearch);
    fetch('/data/tools.json').then(res => res.json()).then(setTools);
  }, []);

  return (
    <div className="p-8">
      <section className="text-center mb-12">
        <img src="/photo.jpg" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Mohammed Abobakr Bin-alsheikh</h1>
        <p className="mt-2 text-lg text-gray-500">Cybersecurity Engineer & Architect</p>
        <a href="/resume.pdf" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">Download Resume</a>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Research</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {research.map((item, idx) => (
            <Card key={idx}>
              <CardContent>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <a href={item.pdf} className="text-blue-500 underline mt-2 block">View Research</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Tools</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tools.map((tool, idx) => (
            <Card key={idx}>
              <CardContent>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <p className="mt-2 text-gray-600">{tool.description}</p>
                <a href={tool.repo} className="text-blue-500 underline mt-2 block">View on GitHub</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
