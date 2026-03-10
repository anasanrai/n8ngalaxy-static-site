
import { Template } from "@/types";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TemplatesTableProps {
  templates: Template[];
}

export function TemplatesTable({ templates }: TemplatesTableProps) {
  return (
    <div className="glass rounded-lg p-4 mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Sales</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell className="font-medium">{template.name}</TableCell>
              <TableCell>
                <Badge variant={template.is_active ? "default" : "destructive"}>
                  {template.is_active ? "Active" : "Draft"}
                </Badge>
              </TableCell>
              <TableCell>${template.price}</TableCell>
              <TableCell>{template.download_count}</TableCell>
              <TableCell>${(template.price * template.download_count).toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Link href={`/seller/templates/${template.id}/edit`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
