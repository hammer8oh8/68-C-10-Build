import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function C10Showcase() {
  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">1968 Chevy C-10 | LS-Powered Pro-Touring Build</h1>
      <Image
        src="/hero-truck.jpg"
        alt="1968 Chevy C-10 finished build"
        width={1200}
        height={700}
        className="rounded-2xl shadow-lg mx-auto"
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Powertrain & Performance</h2>
        <ul className="list-disc list-inside">
          <li>6.0L LS stroked to 408ci, ~600 HP, 93 octane</li>
          <li>FAST LSXR intake, oversized throttle body</li>
          <li>Holley coils, fuel rails, Terminator EFI</li>
          <li>Hooker 3" stainless headers + full exhaust</li>
          <li>4L80E w/ 2800 stall + custom driveshaft</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Suspension & Chassis</h2>
        <ul className="list-disc list-inside">
          <li>No Limit Engineering front crossmember, 4-link rear</li>
          <li>Adjustable coilovers, rack & pinion steering</li>
          <li>Stainless brake/fuel lines, 12-bolt rear, 3.73 gears</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Braking & Wheels</h2>
        <ul className="list-disc list-inside">
          <li>Wilwood 14" front + 12.91" rear drilled/slotted discs</li>
          <li>Forgeline 20" wheels with Nitto tires</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interior & Comfort</h2>
        <ul className="list-disc list-inside">
          <li>Dakota Digital RXT gauges</li>
          <li>Vintage Air AC, Ididit column shift, modern pedal</li>
          <li>American Autowire harness, all new weather seals</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Body & Trim</h2>
        <ul className="list-disc list-inside">
          <li>One-piece power windows, flush glass</li>
          <li>Custom bumpers, grille inserts, billet details</li>
          <li>CVF hood hinges, Slosh Tubs, oak bed floor</li>
          <li>Land Rover Blue/Grey two-tone paint</li>
          <li>Raptor-lined underside for heat/sound</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Build Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <Card key={i}>
              <CardContent className="p-2">
                <Image
                  src={`/build-${i}.jpg`}
                  alt={`Build progress ${i}`}
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-10">
        Built with passion. This 1968 C-10 is more than a truck — it’s a statement.
      </footer>
    </div>
  );
}
