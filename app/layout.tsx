import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Website Maintenance Services | Aarav Infotech',
  description: 'Monthly Website Maintenance with 12-Minute Avg Response. Security, updates, speed, and fixes handled by senior engineers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
