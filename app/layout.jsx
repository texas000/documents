import { Layout } from 'nextra-theme-docs'
 
export default function MyLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body>
        <Layout
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/texas000/documents/tree/main/pages"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
