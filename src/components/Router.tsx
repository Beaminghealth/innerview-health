import { useEffect, useState, useCallback } from 'react';
import type { ReactNode, MouseEvent } from 'react';

export type Route = '/' | '/live-blood-cell-analysis';

export type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export function navigate(to: string) {
  if (to.startsWith('/#')) {
    const target = to.slice(1);
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => {
    const path = window.location.pathname;
    return path === '/live-blood-cell-analysis' ? '/live-blood-cell-analysis' : '/';
  });

  useEffect(() => {
    const onPop = () => {
      const path = window.location.pathname;
      setRoute(path === '/live-blood-cell-analysis' ? '/live-blood-cell-analysis' : '/');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return route;
}

export function Link({ to, children, className, ...rest }: LinkProps) {
  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      navigate(to);
    },
    [to]
  );

  return (
    <a href={to} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}
