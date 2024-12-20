import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { KanbanBoard } from '@/widgets/kanban';
import NewTaskDialog from '@/widgets/kanban/ui/new-task-dialog';
// import PageContainer from '@/components/layout/page-container';
// import { Heading } from '@/components/ui/heading';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Kanban', link: '/dashboard/kanban' }
];

export function KanbanPage() {
  return (
    // <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          {/* <Heading title={`Kanban`} description="Manage tasks by dnd" /> */}
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    // </PageContainer>
  );
}
