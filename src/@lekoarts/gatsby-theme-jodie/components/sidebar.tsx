/** @jsx jsx */
import { jsx, get } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import Logo from "/src/icons/logo"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"
import Navigation from "@lekoarts/gatsby-theme-jodie/src/components/navigation"
import Icon from "/assets/logo2.svg"

type SidebarProps = { bg: string }

const Sidebar = ({ bg }: SidebarProps) => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useJodieConfig()

  return (
    <header
      sx={{
        p: [3, 3, 4],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        backgroundColor: bg,
        position: [`relative`, `relative`, `relative`, `fixed`],
        height: `100%`,
        display: `flex`,
        borderBottom: `none`,
        flexDirection: [`row`, `row`, `row`, `column`],
        alignItems: [`center`, `center`, `center`, `flex-start`],
        justifyContent: [`space-between`, `space-between`, `space-between`, `flex-start`],
        svg: {
          fill: readableColor(bg),
        },
        variant: `sidebar`,
      }}
      data-testid="sidebar"
    >
      <Link to="/projects" aria-label={`${siteTitle}, Back to Home`} sx={{ width: [`3rem`, `4rem`, `4.5rem`, `5rem`] }}>
        <Icon />
      </Link>
      <div sx={{ py: 4, display: [`none`, `none`, `none`, `block`] }} />
      <Navigation bg={bg} />
    </header>
  )
}

export default Sidebar
