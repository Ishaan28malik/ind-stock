import StockData from './components/StockData'

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24 overflow-x-hidden overflow-y-hidden">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 fixed">Stock Dashboard</h1>
      <StockData />
    </main>
  )
}
