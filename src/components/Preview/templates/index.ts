import { ModernTemplate } from '../ModernTemplate';
import { MinimalTemplate } from '../MinimalTemplate';
import { ExecutiveTemplate } from './ExecutiveTemplate';
import { CreativeTemplate } from './CreativeTemplate';
import { TechnicalTemplate } from './TechnicalTemplate';
import { AcademicTemplate } from './AcademicTemplate';
import { StartupTemplate } from './StartupTemplate';
import { EnterpriseTemplate } from './EnterpriseTemplate';
import { PortfolioTemplate } from './PortfolioTemplate';
import { CompactTemplate } from './CompactTemplate';
import { TimelineTemplate } from './TimelineTemplate';
import { HybridTemplate } from './HybridTemplate';

// Map template IDs to their components
export const templateComponents = {
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  executive: ExecutiveTemplate,
  creative: CreativeTemplate,
  technical: TechnicalTemplate,
  academic: AcademicTemplate,
  startup: StartupTemplate,
  enterprise: EnterpriseTemplate,
  portfolio: PortfolioTemplate,
  compact: CompactTemplate,
  timeline: TimelineTemplate,
  hybrid: HybridTemplate,
};

export type TemplateId = keyof typeof templateComponents;