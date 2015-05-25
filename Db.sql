--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.0
-- Dumped by pg_dump version 9.4.0
-- Started on 2015-05-24 21:28:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 182 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2051 (class 0 OID 0)
-- Dependencies: 182
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 173 (class 1259 OID 65588)
-- Name: concordancetraker; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE concordancetraker (
    id integer NOT NULL,
    name character varying(30) DEFAULT NULL::character varying,
    expression text,
    programleft integer,
    programright integer
);


ALTER TABLE concordancetraker OWNER TO postgres;

--
-- TOC entry 172 (class 1259 OID 65586)
-- Name: concordancetraker_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE concordancetraker_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE concordancetraker_id_seq OWNER TO postgres;

--
-- TOC entry 2052 (class 0 OID 0)
-- Dependencies: 172
-- Name: concordancetraker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE concordancetraker_id_seq OWNED BY concordancetraker.id;


--
-- TOC entry 177 (class 1259 OID 213162)
-- Name: hpdetailprofessional; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hpdetailprofessional (
    hpdid integer NOT NULL,
    hpid integer NOT NULL,
    hpdestcon character varying(2),
    hpdpaisred character varying(10),
    hpddepred character varying(10),
    hpdmunred character varying(10),
    hpddirecc character varying(100),
    hpdtelef integer NOT NULL,
    hpdtelmov integer NOT NULL,
    hpdcorreo character varying(50)
);


ALTER TABLE hpdetailprofessional OWNER TO postgres;

--
-- TOC entry 176 (class 1259 OID 213160)
-- Name: hpdetailprofessional_hpdid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hpdetailprofessional_hpdid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hpdetailprofessional_hpdid_seq OWNER TO postgres;

--
-- TOC entry 2053 (class 0 OID 0)
-- Dependencies: 176
-- Name: hpdetailprofessional_hpdid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hpdetailprofessional_hpdid_seq OWNED BY hpdetailprofessional.hpdid;


--
-- TOC entry 175 (class 1259 OID 213154)
-- Name: hphealthprofessional; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hphealthprofessional (
    hpid integer NOT NULL,
    hptipdoc character varying(2),
    hpnumdoc character varying(20),
    hppriape character varying(50),
    hpsegape character varying(50),
    hpprinom character varying(50),
    hpsegnom character varying(50),
    hpsexo character varying(1),
    hpdepnac character varying(10),
    hpmunnac character varying(10),
    hppais character varying(10),
    hpfecnac date,
    hpetnia integer NOT NULL,
    hptoken character varying(10)
);


ALTER TABLE hphealthprofessional OWNER TO postgres;

--
-- TOC entry 174 (class 1259 OID 213152)
-- Name: hphealthprofessional_hpid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hphealthprofessional_hpid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hphealthprofessional_hpid_seq OWNER TO postgres;

--
-- TOC entry 2054 (class 0 OID 0)
-- Dependencies: 174
-- Name: hphealthprofessional_hpid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hphealthprofessional_hpid_seq OWNED BY hphealthprofessional.hpid;


--
-- TOC entry 181 (class 1259 OID 213188)
-- Name: hpserviceprofessional; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hpserviceprofessional (
    hpsid integer NOT NULL,
    hpid integer NOT NULL,
    hpsobliga integer NOT NULL,
    hpstiplug integer NOT NULL,
    hpsdeppr character varying(10),
    hpsmunpr character varying(10),
    hpspaispr character varying(10),
    phsfecini date,
    hpsfecfin date,
    hpsmodal integer NOT NULL,
    hpsprog integer NOT NULL
);


ALTER TABLE hpserviceprofessional OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 213186)
-- Name: hpserviceprofessional_hpsid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hpserviceprofessional_hpsid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hpserviceprofessional_hpsid_seq OWNER TO postgres;

--
-- TOC entry 2055 (class 0 OID 0)
-- Dependencies: 180
-- Name: hpserviceprofessional_hpsid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hpserviceprofessional_hpsid_seq OWNED BY hpserviceprofessional.hpsid;


--
-- TOC entry 179 (class 1259 OID 213175)
-- Name: hpstudyprofessional; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hpstudyprofessional (
    hpesid integer NOT NULL,
    hpid integer NOT NULL,
    hpeorigtit integer NOT NULL,
    hpedepin character varying(10),
    hpemunin character varying(10),
    hpepaisin character varying(10),
    hpetipin integer NOT NULL,
    hpecodin character varying(20),
    hpetippr character varying(3),
    hpecodpr character varying(10),
    hpefecgrad date,
    hpenumconv character varying(20),
    hpefecconv date,
    hpetitequi character varying(100),
    hpegruptit character varying(20),
    hpeactoadm character varying(20),
    hpefecact date
);


ALTER TABLE hpstudyprofessional OWNER TO postgres;

--
-- TOC entry 178 (class 1259 OID 213173)
-- Name: hpstudyprofessional_hpesid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hpstudyprofessional_hpesid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hpstudyprofessional_hpesid_seq OWNER TO postgres;

--
-- TOC entry 2056 (class 0 OID 0)
-- Dependencies: 178
-- Name: hpstudyprofessional_hpesid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hpstudyprofessional_hpesid_seq OWNED BY hpstudyprofessional.hpesid;


--
-- TOC entry 1906 (class 2604 OID 65591)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY concordancetraker ALTER COLUMN id SET DEFAULT nextval('concordancetraker_id_seq'::regclass);


--
-- TOC entry 1909 (class 2604 OID 213165)
-- Name: hpdid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hpdetailprofessional ALTER COLUMN hpdid SET DEFAULT nextval('hpdetailprofessional_hpdid_seq'::regclass);


--
-- TOC entry 1908 (class 2604 OID 213157)
-- Name: hpid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hphealthprofessional ALTER COLUMN hpid SET DEFAULT nextval('hphealthprofessional_hpid_seq'::regclass);


--
-- TOC entry 1911 (class 2604 OID 213191)
-- Name: hpsid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hpserviceprofessional ALTER COLUMN hpsid SET DEFAULT nextval('hpserviceprofessional_hpsid_seq'::regclass);


--
-- TOC entry 1910 (class 2604 OID 213178)
-- Name: hpesid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hpstudyprofessional ALTER COLUMN hpesid SET DEFAULT nextval('hpstudyprofessional_hpesid_seq'::regclass);


--
-- TOC entry 2035 (class 0 OID 65588)
-- Dependencies: 173
-- Data for Name: concordancetraker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY concordancetraker (id, name, expression, programleft, programright) FROM stdin;
\.


--
-- TOC entry 2057 (class 0 OID 0)
-- Dependencies: 172
-- Name: concordancetraker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('concordancetraker_id_seq', 1, false);


--
-- TOC entry 2039 (class 0 OID 213162)
-- Dependencies: 177
-- Data for Name: hpdetailprofessional; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hpdetailprofessional (hpdid, hpid, hpdestcon, hpdpaisred, hpddepred, hpdmunred, hpddirecc, hpdtelef, hpdtelmov, hpdcorreo) FROM stdin;
\.


--
-- TOC entry 2058 (class 0 OID 0)
-- Dependencies: 176
-- Name: hpdetailprofessional_hpdid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hpdetailprofessional_hpdid_seq', 1, false);


--
-- TOC entry 2037 (class 0 OID 213154)
-- Dependencies: 175
-- Data for Name: hphealthprofessional; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hphealthprofessional (hpid, hptipdoc, hpnumdoc, hppriape, hpsegape, hpprinom, hpsegnom, hpsexo, hpdepnac, hpmunnac, hppais, hpfecnac, hpetnia, hptoken) FROM stdin;
\.


--
-- TOC entry 2059 (class 0 OID 0)
-- Dependencies: 174
-- Name: hphealthprofessional_hpid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hphealthprofessional_hpid_seq', 1, false);


--
-- TOC entry 2043 (class 0 OID 213188)
-- Dependencies: 181
-- Data for Name: hpserviceprofessional; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hpserviceprofessional (hpsid, hpid, hpsobliga, hpstiplug, hpsdeppr, hpsmunpr, hpspaispr, phsfecini, hpsfecfin, hpsmodal, hpsprog) FROM stdin;
\.


--
-- TOC entry 2060 (class 0 OID 0)
-- Dependencies: 180
-- Name: hpserviceprofessional_hpsid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hpserviceprofessional_hpsid_seq', 1, false);


--
-- TOC entry 2041 (class 0 OID 213175)
-- Dependencies: 179
-- Data for Name: hpstudyprofessional; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY hpstudyprofessional (hpesid, hpid, hpeorigtit, hpedepin, hpemunin, hpepaisin, hpetipin, hpecodin, hpetippr, hpecodpr, hpefecgrad, hpenumconv, hpefecconv, hpetitequi, hpegruptit, hpeactoadm, hpefecact) FROM stdin;
\.


--
-- TOC entry 2061 (class 0 OID 0)
-- Dependencies: 178
-- Name: hpstudyprofessional_hpesid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hpstudyprofessional_hpesid_seq', 1, false);


--
-- TOC entry 1913 (class 2606 OID 65594)
-- Name: concordancetraker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY concordancetraker
    ADD CONSTRAINT concordancetraker_pkey PRIMARY KEY (id);


--
-- TOC entry 1917 (class 2606 OID 213167)
-- Name: hpdid; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hpdetailprofessional
    ADD CONSTRAINT hpdid PRIMARY KEY (hpdid);


--
-- TOC entry 1919 (class 2606 OID 213180)
-- Name: hpesid; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hpstudyprofessional
    ADD CONSTRAINT hpesid PRIMARY KEY (hpesid);


--
-- TOC entry 1915 (class 2606 OID 213159)
-- Name: hpid; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hphealthprofessional
    ADD CONSTRAINT hpid PRIMARY KEY (hpid);


--
-- TOC entry 1921 (class 2606 OID 213193)
-- Name: hpsid; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hpserviceprofessional
    ADD CONSTRAINT hpsid PRIMARY KEY (hpsid);


--
-- TOC entry 1922 (class 2606 OID 213168)
-- Name: hpid_d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hpdetailprofessional
    ADD CONSTRAINT hpid_d FOREIGN KEY (hpid) REFERENCES hphealthprofessional(hpid);


--
-- TOC entry 1923 (class 2606 OID 213181)
-- Name: hpid_e; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hpstudyprofessional
    ADD CONSTRAINT hpid_e FOREIGN KEY (hpid) REFERENCES hphealthprofessional(hpid);


--
-- TOC entry 1924 (class 2606 OID 213194)
-- Name: hpid_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hpserviceprofessional
    ADD CONSTRAINT hpid_s FOREIGN KEY (hpid) REFERENCES hphealthprofessional(hpid);


--
-- TOC entry 2050 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-05-24 21:28:01

--
-- PostgreSQL database dump complete
--

