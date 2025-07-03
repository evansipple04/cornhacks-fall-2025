// app/layout.tsx
import './globals.css'
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar'
import styles from './styles/layout.module.css'

export const metadata = {
  title: 'Cornhacks',
  description: 'Hackathon site',
  icons: {
    icon: '/cornhacks.ico',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Navbar />
        <Sidebar />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
}
