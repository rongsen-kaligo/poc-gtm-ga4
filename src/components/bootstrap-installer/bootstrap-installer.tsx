import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

import { TenantProvider$ } from "../../providers/BootstrapProvider$/BootstrapProvider$";
import { getBootstrap } from "../../services/get-bootstrap/get-bootstrap";

interface BootstrapInstallerProps extends PropsWithChildren {}

export async function BootstrapInstaller(props: BootstrapInstallerProps) {
  const bootstrap = await getBootstrap();

  if (bootstrap.data) {
    return (
      <TenantProvider$ value={bootstrap.data}>{props.children}</TenantProvider$>
    );
  }

  console.error('Error happened while fetching bootstrap data', bootstrap.error);
  return redirect('/error');
}
