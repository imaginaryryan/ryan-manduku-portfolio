import Loading from '@/app/components/ui/Loading';

export default function LoadingGlobal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="scale-150">
        <Loading />
      </div>
    </div>
  );
}