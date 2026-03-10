import Section from '@/components/Section'

export default function InventoryIntelligencePage() {
  return (
    <Section title="Retail Inventory Intelligence System – Data Engineering & Forecasting Pipeline">
      <div className="mt-6 space-y-10">

        <p className="max-w-prose text-sm leading-relaxed">
          This project implements an end-to-end inventory intelligence system
          designed to transform raw retail transactional data into actionable
          inventory planning insights. The system ingests sales, purchase,
          inventory, and supplier data from a real-world retail dataset and
          builds a structured analytics pipeline that supports demand
          forecasting, inventory optimization, and operational risk analysis.
        </p>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Project Overview
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            Retail inventory management is a complex problem that requires
            accurate demand forecasting, efficient replenishment strategies,
            and continuous monitoring of operational risks. This project
            addresses these challenges by building a modular data pipeline that
            cleans and structures raw ERP-style data, generates daily product
            demand signals, forecasts future demand, and applies supply-chain
            optimization techniques to produce data-driven inventory decisions.
            The system outputs business-ready tables such as reorder plans,
            stock-out risk assessments, and supplier reliability scores that
            could be integrated into enterprise planning systems.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            System Architecture
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>ETL pipeline to ingest and clean raw retail sales, inventory, and supplier data</li>
            <li>Normalization of ERP-style CSV datasets into structured analytical tables</li>
            <li>Daily SKU-level demand generation from transactional sales data</li>
            <li>Time-series forecasting module to predict 30-day product demand</li>
            <li>Inventory optimization using safety stock, reorder points, and EOQ calculations</li>
            <li>ABC classification to prioritize high-impact products based on revenue</li>
            <li>Risk analysis including stock-out probability and supplier reliability scoring</li>
            <li>Forecast performance monitoring using MAE, RMSE, MAPE, and bias metrics</li>
            <li>Automated generation of business-ready decision tables for inventory planning</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            My Role & Contributions
          </h2>
          <ul className="list-disc pl-5 max-w-prose space-y-2 text-sm leading-relaxed">
            <li>Designed and implemented the full data pipeline architecture for inventory intelligence</li>
            <li>Developed ETL processes to clean and normalize large ERP-style datasets</li>
            <li>Built demand forecasting models using time-series analysis techniques</li>
            <li>Implemented inventory planning algorithms including safety stock, reorder points, and EOQ</li>
            <li>Created analytical modules for forecast accuracy evaluation and operational risk assessment</li>
            <li>Generated structured decision tables to support inventory planning and supplier management</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">
            Outcome & Key Learnings
          </h2>
          <p className="max-w-prose text-sm leading-relaxed">
            This project demonstrates how data engineering and predictive
            analytics can be combined to build a practical inventory planning
            system. By transforming raw operational data into forecasting,
            optimization, and risk analysis outputs, the system highlights how
            data-driven decision making can reduce stock-outs, improve inventory
            efficiency, and support more reliable supply chain operations. The
            project also reinforced the importance of robust data pipelines,
            reproducible workflows, and integrating business logic into
            analytics systems.
          </p>
        </div>

      </div>
    </Section>
  )
}