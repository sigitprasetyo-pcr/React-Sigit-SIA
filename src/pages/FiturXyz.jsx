import PageHeader from "../components/PageHeader";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FiturXyz() {
  return (
    <div>
      <PageHeader
        title="Fitur Xyz"
        breadcrumb="Dashboard / Order List"
      />

      <p className="mt-5 text-gray-700">
        Ini Halaman Fitur Xyz
      </p>

      <Card className="mt-4 w-[380px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Belajar shadcn/ui</CardTitle>

            <Badge variant="secondary">
              Baru
            </Badge>
          </div>

          <CardDescription>
            Contoh penggunaan komponen shadcn/ui di React
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Komponen ini dibuat di branch{" "}
            <strong>setup-shadcn</strong> lalu di-merge ke main.
          </p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button>
            Simpan
          </Button>

          <Button variant="outline">
            Batal
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}