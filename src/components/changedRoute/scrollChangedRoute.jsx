const handleScrollToTopWhenChangeRoute = () => {
  const { path } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return null;
};
