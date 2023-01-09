import { Korreksjonsgrunn } from './refusjon/refusjon';
import { KorreksjonStatus, RefusjonStatus, Tiltak } from './refusjon/refusjon';

export const tiltakstypeTekst: { [key in Tiltak]: string } = {
    MIDLERTIDIG_LONNSTILSKUDD: 'midlertidig lønnstilskudd',
    VARIG_LONNSTILSKUDD: 'varig lønnstilskudd',
    MENTOR: 'mentor',
    SOMMERJOBB: 'sommerjobb',
};

export const statusTekst: { [key in RefusjonStatus]: string } = {
    SENDT_KRAV: 'sendt krav',
    UTBETALT: 'utbetalt',
    GODKJENT_MINUSBELØP: 'sendt krav med minusbeløp',
    UTGÅTT: 'frist utgått',
    KLAR_FOR_INNSENDING: 'klar for innsending',
    UTBETALING_FEILET: 'Utbetaling feilet',
    FOR_TIDLIG: 'for tidlig',
    ANNULLERT: 'annullert',
    KORRIGERT: 'korrigert',
};

export const korreksjonStatusTekst: { [key in KorreksjonStatus]: string } = {
    UTKAST: 'korreksjonsutkast',
    TILLEGSUTBETALING: 'korreksjon sendt til utbetaling',
    OPPGJORT: 'korreksjon oppgjort',
    TILBAKEKREVING: 'korreksjon skal tilbakekreves',
};

export const inntektstypeTekst: { [key: string]: string } = {
    LOENNSINNTEKT: 'Lønnsinntekt',
};

export const lønnsbeskrivelseTekst: { [key: string]: string } = {
    administrativForpleining: 'Administrativ forpleining',
    aksjerGrunnfondsbevisTilUnderkurs: 'Aksjer/grunnfondsbevis til underkurs',
    annet: 'Annet',
    arbeidsoppholdKost: 'Arbeidsopphold kost',
    arbeidsoppholdLosji: 'Arbeidsopphold losji',
    bedriftsbarnehageplass: 'Bedriftsbarnehageplass',
    beregnetSkatt: 'Beregnet skatt',
    besoeksreiserHjemmetAnnet: 'Besøksreiser hjemmet annet',
    besoeksreiserHjemmetKilometergodtgjoerelseBil: 'Besøksreiser hjemmet kilometergodtgjørelse bil',
    besoeksreiserHjemmetKost: 'Besøksreiser hjemmet kost',
    betaltUtenlandskSkatt: 'Betalt utenlandsk skatt',
    bil: 'Bil',
    bolig: 'Bolig',
    bonus: 'Bonus',
    bonusFraForsvaret: 'Bonus fra forsvaret',
    elektroniskKommunikasjon: 'Elektronisk kommunikasjon',
    fastBilgodtgjoerelse: 'Fast bilgodtgjørelse',
    fastloenn: 'Fastlønn',
    fastTillegg: 'Faste tillegg',
    feriepenger: 'Feriepenger',
    flyttegodtgjoerelse: 'Flyttegodtgjørelse mv',
    fondForIdrettsutoevere: 'Fond for idrettsutøvere',
    friTransport: 'Fri transport',
    godtgjoerelseSaeravtaleUtland: 'Godtgjørelse i henhold til særavtale utland',
    helligdagstillegg: 'Helligdagstillegg',
    honorarAkkordProsentProvisjon: 'Honorar/Akkord/Prosent/Provisjon',
    hyretillegg: 'Hyretillegg',
    ikkeSkattepliktigLoennFraUtenlandskDiplomKonsulStasjon:
        'Lønn mv som ikke er skattepliktig i Norge fra utenlandsk diplomatisk eller konsulær stasjon',
    innbetalingTilUtenlandskPensjonsordning: 'Innbetaling til utenlandsk pensjonsordning',
    kapitalInntekt: 'Kapitalinntekt',
    kilometergodtgjoerelseAndreFremkomstmidler: 'Kilometergodtgjørelse andre fremkomstmidler',
    kilometergodtgjoerelseBil: 'Kilometergodtgjørelse bil',
    kilometergodtgjoerelseElBil: 'Kilometergodtgjørelse el-bil',
    kilometergodtgjoerelsePassasjertillegg: 'Kilometergodtgjørelse passasjertillegg',
    kommunalOmsorgsloennOgFosterhjemsgodtgjoerelse: 'Kommunal omsorgslønn og fosterhjemsgodtgjørelse',
    kompensasjonstilleggBolig: 'Kompensasjonstillegg bolig',
    kostbesparelseIHjemmet: 'Kostbesparelse i hjemmet',
    kostDager: 'Kost (dager)',
    kostDoegn: 'Kost (døgn)',
    loennEtterDoedsfall: 'Lønn etter dødsfall',
    loennForBarnepassIBarnetsHjem: 'Lønn og godtgjørelse til dagmamma eller praktikant som passer barn i barnets hjem',
    loennTilPrivatpersonerForArbeidIHjemmet:
        'Lønn og godtgjørelse til privatpersoner for arbeidsoppdrag i oppdragsgivers hjem',
    loennTilVergeFraFylkesmannen: 'Lønn til verge fra Fylkesmannen',
    loennUtbetaltAvVeldedigEllerAllmennyttigInstitusjonEllerOrganisasjon:
        'Lønn og godtgjørelse utbetalt av veldedig eller allmennyttig institusjon eller organisasjon',
    loennUtenlandskArtist: 'Lønn utenlandsk artist',
    losji: 'Losji',
    losjiEgenBrakkeCampingvogn: 'Losji egen brakke/campingvogn',
    opsjoner: 'Opsjoner',
    opsjonsytelser: 'Opsjonsytelser',
    overtidsgodtgjoerelse: 'Overtidsgodtgjørelse',
    overtidsmat: 'Overtidsmat',
    reiseAnnet: 'Reise annet',
    reiseKost: 'Reise kost',
    reiseKostMedOvernatting: 'Reise kost med overnatting',
    reiseKostMedOvernattingPaaHotell: 'Reise kost med overnatting på hotell',
    reiseKostMedOvernattingPaaHotellBeordringUtover28Doegn:
        'Reise kost med overnatting på hotell beordring utover 28 døgn',
    reiseKostMedOvernattingPaaHybelBrakkePrivat: 'Reise kost med overnatting på hybel/brakke/privat',
    reiseKostMedOvernattingPaaPensjonat: 'Reise kost med overnatting på pensjonat',
    reiseKostMedOvernattingTilLangtransportsjaafoerForKjoeringIUtlandet:
        'Reise kost med overnatting til langtransportsjåfør for kjøring i utlandet',
    reiseKostUtenOvernatting: 'Reise kost uten overnatting',
    reiseLosji: 'Reise losji',
    reiseNattillegg: 'Reise nattillegg',
    rentefordelLaan: 'Rentefordel lån',
    skattefriErstatning: 'Skattefri erstatning',
    skattefrieUtbetalinger: 'Skattefrie utbetalinger',
    skattepliktigDelForsikringer: 'Skattepliktig del av visse typer forsikringer',
    skattepliktigPersonalrabatt: 'Skattepliktig personalrabatt',
    sluttvederlag: 'Sluttvederlag',
    smusstillegg: 'Smusstillegg',
    stipend: 'Stipend',
    styrehonorarOgGodtgjoerelseVerv: 'Styrehonorar og godtgjørelse i forbindelse med verv',
    testLoennsbeskrivelse: 'Test Loennsbeskrivelse',
    tilskuddBarnehageplass: 'Tilskudd barnehageplass',
    timeloenn: 'Timelønn',
    tips: 'Tips',
    trekkILoennForFerie: 'Trekk i lønn for ferie',
    uregelmessigeTilleggKnyttetTilArbeidetTid: 'Uregelmessige tillegg knyttet til arbeidet tid',
    uregelmessigeTilleggKnyttetTilIkkeArbeidetTid: 'Uregelmessige tillegg knyttet til ikke- arbeidet tid',
    yrkebilTjenestligbehovKilometer: 'Yrkebil tjenestligbehov kilometer',
    yrkebilTjenestligbehovListepris: 'Yrkebil tjenestligbehov listepris',
    // Pensjon eller trygd
    alderspensjon: 'Alderspensjon fra folketrygden',
    avtalefestetPensjon: 'Avtalefestet pensjon (AFP)',
    barnepensjon: 'Barnepensjon fra folketrygden',
    barnepensjonFraAndreEnnFolketrygden: 'Barnepensjon fra andre enn folketrygden',
    ektefelletillegg: 'Ektefelletillegg',
    ellerloenn: 'Etterlønn',
    engangsutbetalingInnskuddspensjon: 'Engangsutbetaling innskuddspensjon',
    etterlattepensjon: 'Etterlattepensjon fra folketrygden',
    etterloenn: 'Etterlønn',
    etterloennOgEtterpensjon: 'Etterlønn og etterpensjon',
    foederaad: 'Føderåd',
    introduksjonsstoenad: 'Introduksjonsstønad',
    ipaEllerIpsBarnepensjon: 'Ipa eller ips barnepensjon',
    ipaEllerIpsEngangsutbetaling: 'Ipa eller ips engangsutbetaling',
    ipaEllerIpsPeriodiskeYtelser: 'Ipa eller ips periodiske ytelser',
    ipaEllerIpsUfoerepensjon: 'Ipa eller ips uførepensjon',
    krigspensjon: 'Krigspensjon mv.',
    kvalifiseringstoenad: 'Kvalifiseringstønad',
    nyAvtalefestetPensjonPrivatSektor: 'Ny avtalefestet pensjon (AFP) i privat sektor',
    nyeLivrenterIArbeidsforholdOgLivrenterFortsettelsesforsikringer:
        'Nye livrenter i arbeidsforhold (kollektive livrenter) og livrenter tegnet som fortsettelsesforsikringer',
    overgangsstoenad: 'Overgangsstønad',
    overgangsstoenadTilEnsligMorEllerFarSomBegynteAaLoepe31Mars2014EllerTidligere:
        'Overgangsstønad til enslig mor eller far som begynte å løpe 31. mars 2014 eller tidligere',
    overgangsstoenadTilGjenlevendeEktefelle: 'Overgangsstønad til gjenlevende ektefelle',
    pensjonIDoedsmaaneden: 'Pensjon i dødsmåneden (skattefri)',
    pensjonOgLivrenterIArbeidsforhold: 'Pensjon og livrenter i arbeidsforhold',
    slitertillegg: 'Slitertillegg',
    supplerendeStoenadTilPersonKortBotidNorge: 'Supplerende stønad til person med kort botid i Norge',
    supplerendeStoenadTilUfoerFlyktning: 'Supplerende stønad til ufør flyktning',
    ufoerepensjon: 'Uførepensjon fra folketrygden',
    ufoerepensjonFraAndreEnnFolketrygden: 'Uførepensjon fra andre enn folketrygden',
    ufoereytelseEtteroppgjoerFraAndreEnnFolketrygden: 'Uføreytelse etteroppgjør fra andre enn folketrygden',
    underholdsbidragTilTidligereEktefelle: 'Underholdsbidrag til tidligere ektefelle',
    // Næringsinntekt
    dagpengerTilFisker: 'Dagpenger til fisker',
    kompensasjonForTaptPersoninntekt: 'Kompensasjon for tapt personinntekt',
    lottKunTrygdeavgift: 'Lott det skal beregnes trygdeavgift av',
    sykepenger: 'Sykepenger fra folketrygden',
    sykepengerTilDagmamma: 'Sykepenger til dagmamma',
    sykepengerTilFisker: 'Sykepenger til fisker',
    sykepengerTilJordOgSkogbrukere: 'Sykepenger til jord- og skogbrukere',
    vederlag: 'Vederlag',
    vederlagDagmammaIEgetHjem: 'Vederlag til dagmamma i eget hjem',
    // Ytelse fra offentlig
    arbeidsavklaringspenger: 'Arbeidsavklaringspenger',
    dagpengerTilFiskerSomBareHarHyre: 'Dagpenger til fisker som bare har hyre',
    dagpengerVedArbeidsloeshet: 'Dagpenger ved arbeidsløshet',
    ektefelletilleggUfoeretrygd: 'Ektefelletillegg uføretrygd',
    foreldrepenger: 'Foreldrepenger fra folketrygden',
    overgangsstoenadTilEnsligMorEllerFarSomBegynteAaLoepe1April2014EllerSenere:
        'Overgangsstønad til enslig mor eller far som begynte å løpe 1. april 2014 eller senere',
    skattefrieTilleggsstoenader: 'Skattefrie tilleggsstønader',
    skattefriStoenadTilBarnetilsyn: 'Skattefri stønad til barnetilsyn fra folketrygden',
    svangerskapspenger: 'Svangerskapspenger',
    sykepengerTilFiskerSomBareHarHyre: 'Sykepenger til fisker som bare har hyre',
    ufoeretrygd: 'Uføretrygd',
    ufoereytelseEtteroppgjoer: 'Uføreytelse etteroppgjør',
    underholdsbidragTilBarn: 'Underholdsbidrag til barn',
    venteloenn: 'Ventelønn',
};

export const korreksjonsgrunnTekst: { [key in Korreksjonsgrunn]: string } = {
    UTBETALT_HELE_TILSKUDDSBELØP: 'Utbetalt hele tilskuddsbeløpet',
    HENT_INNTEKTER_TO_MÅNEDER_FREM: 'Inntekter rapportert etter tilskuddsperioden (2 måneder)',
    HENT_INNTEKTER_PÅ_NYTT: 'Beregnet refusjon på mangelfullt inntektsgrunnlag',
};
